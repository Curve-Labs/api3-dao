import * as hre from 'hardhat'
import {expect} from 'chai'
import 'mocha'
import {Api3Token, TestPool} from '../typechain'
import {BigNumber} from "ethers";

const testCaseNumbers: string[] =  ['0', '6', '13', '100000000000000000000000', '10000001', '47777', '40000000', '1437589347', '1000000000000']
const testValues: BigNumber[] = testCaseNumbers.map((value) => BigNumber.from(value));


describe('StakeUtils', () => {
  let accounts: string[]
  let token: Api3Token
  let pool: TestPool
  let ownerAccount: Api3Token
  let stakers: TestPool[]

  before(async () => {
    accounts = await hre.waffle.provider.listAccounts()
    const api3TokenFactory = await hre.ethers.getContractFactory("Api3Token")
    token = (await api3TokenFactory.deploy(accounts[0], accounts[0])) as Api3Token
    const api3PoolFactory = await hre.ethers.getContractFactory("TestPool")
    pool = (await api3PoolFactory.deploy(token.address)) as TestPool
    const signer0 = hre.waffle.provider.getSigner(0)
    ownerAccount = token.connect(signer0)
    stakers = await Promise.all(accounts.map(async account => {
      await ownerAccount.transfer(account, 100)
      const signer = hre.waffle.provider.getSigner(account)
      const holder = token.connect(signer)
      await holder.approve(pool.address, 100)
      return pool.connect(signer)
    }))
  })

  it('stakes a deposit', async () => {
    await stakers[1].deposit(accounts[1], 100, accounts[1])

    const deposited = (await pool.users(accounts[1])).unstaked
    expect(deposited).to.equal(100)

    await stakers[1].stake(50)

    const staked = await pool.balanceOf(accounts[1])
    // console.log(JSON.stringify(staked))
    expect(staked).to.equal(50)
    const unstaked = (await pool.users(accounts[1])).unstaked
    expect(unstaked).to.equal(50)
  })

  it('deposits and stakes in one tx', async () => {
    await stakers[2].depositAndStake(accounts[2], 100, accounts[2])

    const staked = await pool.balanceOf(accounts[2])
    expect(staked).to.equal(100)
    const unstaked = (await pool.users(accounts[2])).unstaked
    expect(unstaked).to.equal(0)
    const unpooled = await token.balanceOf(accounts[2])
    expect(unpooled).to.equal(0)
    const apr = await pool.currentApr()
    console.log(`\n\n\n\n ${apr} \n\n\n\n\n`)
  })

  it('schedules unstake', async () => {
    await stakers[1].scheduleUnstake(25)

    const unstakeAmount = (await pool.users(accounts[1])).unstakeAmount
    expect(unstakeAmount).to.equal(25)
  })

})


describe('StakeUtils_MultiCase', () => {
  let accounts: string[]
  let token: Api3Token
  let pool: TestPool
  let ownerAccount: Api3Token
  let sum = BigNumber.from(0);
  let sumDeposited = BigNumber.from(0);
  let sumUnstaked = BigNumber.from(0);
  let sumStaked = BigNumber.from(0);

  before(async () => {
    accounts = await hre.waffle.provider.listAccounts()
    const api3TokenFactory = await hre.ethers.getContractFactory("Api3Token")
    token = (await api3TokenFactory.deploy(accounts[0], accounts[0])) as Api3Token
    const api3PoolFactory = await hre.ethers.getContractFactory("TestPool")
    pool = (await api3PoolFactory.deploy(token.address)) as TestPool
    const signer0 = hre.waffle.provider.getSigner(0)
    ownerAccount = token.connect(signer0)
  })

  testValues.map((testValue, index) => {
    it(`transfer tokens: case ${index}`, async () => {
      await ownerAccount.transfer(accounts[1], testValue);
      sum = sum.add(testValue);
      const balance = await token.balanceOf(accounts[1]);
      expect(balance).to.equal(sum);
    })
  })

  testValues.map((testValue, index) => {
    it(`deposit and stake tokens: case ${index}`, async () => {
      // get signer
      const signer = hre.waffle.provider.getSigner(1)
      const account = token.connect(signer)
      const staker = pool.connect(signer)
      // approve transfer
      await account.approve(pool.address, testValue)
      const allowance = await token.allowance(accounts[1], pool.address)
      expect(allowance).to.equal(testValue)
      // deposit api3
      await staker.deposit(accounts[1], testValue, accounts[1])
      sumDeposited = sumDeposited.add(testValue);
      // stake api3
      const stakeAmount = testValue.div(2);
      await staker.stake(stakeAmount);
      sumStaked = sumStaked.add(stakeAmount);
      sumUnstaked = sumUnstaked.add(testValue.sub(stakeAmount));
      // check stake
      const staked = await pool.userStaked(accounts[1]);
      expect(staked).to.equal(sumStaked);
      // check unstaked
      const unstaked = (await pool.users(accounts[1])).unstaked;
      expect(unstaked).to.equal(sumUnstaked);
      // check total
      expect(staked.add(unstaked)).to.equal(sumDeposited);
    })
  })

  testValues.map((testValue, index) => {
    it(`schedule unstake: case ${index}`, async () => {
      const staker = pool.connect(hre.waffle.provider.getSigner(1));
      const staked = await pool.userStaked(accounts[1]);
      if (testValue.gt(staked)) {
        await expect(staker.scheduleUnstake(testValue)).to.be.reverted;
      } else {
        await staker.scheduleUnstake(testValue);
        // check unstake request amount
        const unstakeAmount = (await pool.users(accounts[1])).unstakeAmount;
        expect(unstakeAmount).to.equal(testValue);
        // check unstake request timestamp
        const now = await getBlockTimestamp()
        const wait = await pool.unstakeWaitPeriod();
        const unstakeScheduleAt = (await pool.users(accounts[1])).unstakeScheduledFor;
        expect(unstakeScheduleAt).to.equal(now.add(wait));
      }
    })
  })

  it('unstake all staked tokens', async () => {
    const staker = pool.connect(hre.waffle.provider.getSigner(1));
    const startUnstaked = (await pool.users(accounts[1])).unstaked;
    const startStaked = await pool.userStaked(accounts[1]);
    // request unstake
    await staker.scheduleUnstake(startStaked);
    // forward time to be within unstake time window
    const unstakeScheduleAt = (await pool.users(accounts[1])).unstakeScheduledFor;
    const inWindow = unstakeScheduleAt.add(3600).toNumber();
    await jumpTo(inWindow);
    // unstake tokens
    await staker.unstake();
    const unstaked = (await pool.users(accounts[1])).unstaked;
    expect(unstaked).to.equal(startUnstaked.add(startStaked));
  })
})


describe('StakeUtils_UnstakeDeep', () => {
  let accounts: string[]
  let token: Api3Token
  let pool: TestPool
  let ownerAccount: Api3Token

  let staker: TestPool;
  let wait: BigNumber;

  before(async () => {
    accounts = await hre.waffle.provider.listAccounts()
    const api3TokenFactory = await hre.ethers.getContractFactory("Api3Token")
    token = (await api3TokenFactory.deploy(accounts[0], accounts[0])) as Api3Token
    const api3PoolFactory = await hre.ethers.getContractFactory("TestPool")
    pool = (await api3PoolFactory.deploy(token.address)) as TestPool
    const signer0 = hre.waffle.provider.getSigner(0)
    ownerAccount = token.connect(signer0)
    staker = pool.connect(hre.waffle.provider.getSigner(1));
    // unstake request wait period
    wait = await pool.rewardEpochLength();
  })

  testValues.map((testValue, index) => {

    it(`early unstake attempt then valid unstake: case ${index}`, async () => {
      await resetUnstakedTo(testValue, accounts[1], accounts[0], token, pool);
      const expectedUnstaked = (await pool.users(accounts[1])).unstaked;
      const [unstakeScheduleAt, unstakeAmount] = await resetUnstakeRequest(staker, accounts[1], testValue);
      // forward time by less than minWait
      const oneMinuteBeforeWindow = unstakeScheduleAt.sub(60).toNumber();
      await jumpTo(oneMinuteBeforeWindow);
      await expect(staker.unstake()).to.be.reverted;
      // forward time to be just within unstake time window
      const oneMinuteInWindow = unstakeScheduleAt.add(60).toNumber();
      await jumpTo(oneMinuteInWindow);
      // unstake tokens
      await staker.unstake();
      const unstaked = (await pool.users(accounts[1])).unstaked;
      expect(unstaked).to.equal(expectedUnstaked);
    })

    it(`unstake just before invalid: case ${index}`, async () => {
      await resetUnstakedTo(testValue, accounts[1], accounts[0], token, pool);
      const expectedUnstaked = (await pool.users(accounts[1])).unstaked;
      const [unstakeScheduleAt, unstakeAmount] = await resetUnstakeRequest(staker, accounts[1], testValue);
      // forward time by just before end of window
      const oneMinuteBeforeWindowClose = unstakeScheduleAt.add(wait).sub(60).toNumber();
      await jumpTo(oneMinuteBeforeWindowClose);
      // unstake tokens
      await staker.unstake();
      const unstaked = (await pool.users(accounts[1])).unstaked;
      expect(unstaked).to.equal(expectedUnstaked);
    })

    it(`unstake attempt after valid window: case ${index}`, async () => {
      await resetUnstakedTo(testValue, accounts[1], accounts[0], token, pool);
      const [unstakeScheduleAt, _] = await resetUnstakeRequest(staker, accounts[1], testValue);
      // forward time by more than maxWait
      const oneMinuteAfterWindow = unstakeScheduleAt.add(wait).add(60).toNumber();
      await jumpTo(oneMinuteAfterWindow);
      await expect(staker.unstake()).to.be.reverted;
    })
  })
})

export async function getBlockTimestamp(blockNumber?: string | number | BigNumber): Promise<BigNumber> {
  let block;
  if (blockNumber) {
    block = await hre.ethers.provider.getBlock(blockNumber.toString());
  } else {
    const currentBlockNumber = await hre.ethers.provider.getBlockNumber();
    block = await hre.ethers.provider.getBlock(currentBlockNumber);
  }
  return BigNumber.from(block.timestamp);
}

export const jumpTo = async (timestamp: number) => {
  await hre.network.provider.send("evm_setNextBlockTimestamp", [timestamp]);
  await hre.network.provider.send("evm_mine");
}

export async function resetUnstakeRequest(staker: TestPool, address: string, amount: BigNumber) {
  const alreadyUnstaked = (await staker.users(address)).unstaked;
  if (amount.gt(alreadyUnstaked)) {
    expect(await staker.stake(amount)).to.be.reverted;
  }
  await staker.stake(amount);
  await staker.scheduleUnstake(amount);
  const user = await staker.users(address);
  return [user.unstakeScheduledFor, user.unstakeAmount];
}

export const resetUnstakedTo = async (amount: BigNumber, stakerAddress: string, ownerAddress: string, token: Api3Token, pool: TestPool) => {
  // get values
  const staker = pool.connect(hre.waffle.provider.getSigner(stakerAddress));
  const staked = await pool.userStaked(stakerAddress);
  // unstake all
  if (staked.gt(0)) {
    await staker.scheduleUnstake(staked);
    const unstakeScheduleAt = (await staker.users(stakerAddress)).unstakeScheduledFor;
    const inWindow = unstakeScheduleAt.add(3600).toNumber();
    await jumpTo(inWindow);
    await staker.unstake();
  }
  // transfer all to owner account
  const unstaked = (await staker.users(stakerAddress)).unstaked;
  if (unstaked.gt(0)) {
    await token.transfer(ownerAddress, unstaked);
  }
  // transfer amount to staker account
  await token.transfer(stakerAddress, amount);
  // deposit
  await token.connect(hre.waffle.provider.getSigner(1)).approve(pool.address, amount);
  await staker.deposit(stakerAddress, amount, stakerAddress);
}