/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { GetterUtils } from "../GetterUtils";

export class GetterUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    api3TokenAddress: string,
    overrides?: Overrides
  ): Promise<GetterUtils> {
    return super.deploy(
      api3TokenAddress,
      overrides || {}
    ) as Promise<GetterUtils>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(api3TokenAddress, overrides || {});
  }
  attach(address: string): GetterUtils {
    return super.attach(address) as GetterUtils;
  }
  connect(signer: Signer): GetterUtils__factory {
    return super.connect(signer) as GetterUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GetterUtils {
    return new Contract(address, _abi, signerOrProvider) as GetterUtils;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "api3TokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newApr",
        type: "uint256",
      },
    ],
    name: "Epoch",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "genesisEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetEpoch",
        type: "uint256",
      },
    ],
    name: "getCurrentUserLock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardEpochLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardVestingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "bool",
        name: "paid",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "atBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeTarget",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "totalStakeAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "totalSupplyAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unstakeWaitPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateCoeff",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetEpoch",
        type: "uint256",
      },
    ],
    name: "updateUserLock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "unstaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "locked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeScheduledFor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdateEpoch",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052622625a060055563047868c06006556a084595161401484a000000600755620f424060085562093a80600955600554600a553480156200004357600080fd5b5060405162001b8238038062001b82833981810160405260208110156200006957600080fd5b810190808051906020019092919050505080600260405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200018561a8c0426200019460201b62000d821790919060201c565b608081815250505050620002b1565b6000620001de83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250620001e660201b60201c565b905092915050565b6000808311829062000296576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156200025a5780820151818401526020810190506200023d565b50505050905090810190601f168015620002885780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581620002a357fe5b049050809150509392505050565b6080516118a7620002db60003980610764528061079f5280610d1e528061121352506118a76000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c806370a08231116100b8578063a87430ba1161007c578063a87430ba1461045d578063b6ca9563146104d1578063b70e6be61461051f578063decac4f51461053d578063e7460a521461055b578063f301af421461057957610136565b806370a0823114610369578063784b3c5d146103c15780638b0e9f3f146103df57806392093b36146103fd578063981b24d01461041b57610136565b8063276e0058116100ff578063276e00581461024057806341cb8c20146102825780634eb05c47146102cb5780634f322ae8146102e9578063548975771461030757610136565b806201e8621461013b578063106644131461019d57806313f2dad0146101bb57806318160ddd1461020457806320a0a0e914610222575b600080fd5b6101876004803603604081101561015157600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105cb565b6040518082815260200191505060405180910390f35b6101a5610620565b6040518082815260200191505060405180910390f35b6101e7600480360360208110156101d157600080fd5b8101908080359060200190929190505050610626565b604051808381526020018281526020019250505060405180910390f35b61020c610657565b6040518082815260200191505060405180910390f35b61022a6106ea565b6040518082815260200191505060405180910390f35b61026c6004803603602081101561025657600080fd5b81019080803590602001909291905050506106f0565b6040518082815260200191505060405180910390f35b6102ae6004803603602081101561029857600080fd5b8101908080359060200190929190505050610704565b604051808381526020018281526020019250505060405180910390f35b6102d3610735565b6040518082815260200191505060405180910390f35b6102f161073b565b6040518082815260200191505060405180910390f35b6103536004803603604081101561031d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610741565b6040518082815260200191505060405180910390f35b6103ab6004803603602081101561037f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109fb565b6040518082815260200191505060405180910390f35b6103c9610aad565b6040518082815260200191505060405180910390f35b6103e7610ab3565b6040518082815260200191505060405180910390f35b610405610b46565b6040518082815260200191505060405180910390f35b6104476004803603602081101561043157600080fd5b8101908080359060200190929190505050610b4c565b6040518082815260200191505060405180910390f35b61049f6004803603602081101561047357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b60565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b61051d600480360360408110156104e757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b96565b005b610527610d1c565b6040518082815260200191505060405180910390f35b610545610d40565b6040518082815260200191505060405180910390f35b610563610d45565b6040518082815260200191505060405180910390f35b6105a56004803603602081101561058f57600080fd5b8101908080359060200190929190505050610d4b565b604051808415158152602001838152602001828152602001935050505060405180910390f35b6000610618600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010184610dcc565b905092915050565b60085481565b6002818154811061063357fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60003073ffffffffffffffffffffffffffffffffffffffff1663981b24d0436040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156106aa57600080fd5b505afa1580156106be573d6000803e3d6000fd5b505050506040513d60208110156106d457600080fd5b8101908080519060200190929190505050905090565b61a8c081565b60006106fd600383610dcc565b9050919050565b6003818154811061071157fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60075481565b600a5481565b60008061075961a8c042610d8290919063ffffffff16565b9050600061079160347f0000000000000000000000000000000000000000000000000000000000000000610f5e90919063ffffffff16565b90506000818310156107c3577f00000000000000000000000000000000000000000000000000000000000000006107d8565b6107d7603484610fe690919063ffffffff16565b5b90506000600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816006015490506000826002015490506000848460060154106108595761085460018560060154610f5e90919063ffffffff16565b61085b565b845b90505b8681116108ff576000600460008381526020019081526020016000209050600061088d60028360020154610dcc565b905060006108a2876001018460020154610dcc565b90506108df6108d0836108c284876001015461103090919063ffffffff16565b610d8290919063ffffffff16565b86610f5e90919063ffffffff16565b94505050506108f8600182610f5e90919063ffffffff16565b905061085e565b508486106109ec576000858460060154106109315761092c60018560060154610f5e90919063ffffffff16565b610933565b855b90505b8681116109ea57600060046000610957603485610fe690919063ffffffff16565b81526020019081526020016000209050600061097860028360020154610dcc565b9050600061098d876001018460020154610dcc565b90506109ca6109bb836109ad84876001015461103090919063ffffffff16565b610d8290919063ffffffff16565b86610fe690919063ffffffff16565b94505050506109e3600182610f5e90919063ffffffff16565b9050610936565b505b80965050505050505092915050565b60003073ffffffffffffffffffffffffffffffffffffffff166201e86243846040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015610a6b57600080fd5b505afa158015610a7f573d6000803e3d6000fd5b505050506040513d6020811015610a9557600080fd5b81019080805190602001909291905050509050919050565b60055481565b60003073ffffffffffffffffffffffffffffffffffffffff1663276e0058436040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610b0657600080fd5b505afa158015610b1a573d6000803e3d6000fd5b505050506040513d6020811015610b3057600080fd5b8101908080519060200190929190505050905090565b60065481565b6000610b59600283610dcc565b9050919050565b60016020528060005260406000206000915090508060000154908060020154908060030154908060040154908060060154905085565b60046000610baf61a8c042610d8290919063ffffffff16565b815260200190815260200160002060000160009054906101000a900460ff16610bdb57610bda6110b6565b5b60003073ffffffffffffffffffffffffffffffffffffffff16635489757784846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015610c4c57600080fd5b505afa158015610c60573d6000803e3d6000fd5b505050506040513d6020811015610c7657600080fd5b8101908080519060200190929190505050905080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060181905550505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b603481565b60095481565b60046020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154905083565b6000610dc483836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061151c565b905092915050565b60008083805490501415610de35760009050610f58565b82610dfc60018580549050610fe690919063ffffffff16565b81548110610e0657fe5b9060005260206000209060020201600001548210610e5a5782610e3760018580549050610fe690919063ffffffff16565b81548110610e4157fe5b9060005260206000209060020201600101549050610f58565b82600081548110610e6757fe5b906000526020600020906002020160000154821015610e895760009050610f58565b600080610ea460018680549050610fe690919063ffffffff16565b90505b81811115610f35576000610eea6002610edc6001610ece8787610f5e90919063ffffffff16565b610f5e90919063ffffffff16565b610d8290919063ffffffff16565b905084868281548110610ef957fe5b90600052602060002090600202016000015411610f1857809250610f2f565b610f2c600182610fe690919063ffffffff16565b91505b50610ea7565b848281548110610f4157fe5b906000526020600020906002020160010154925050505b92915050565b600080828401905083811015610fdc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600061102883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506115e2565b905092915050565b60008083141561104357600090506110b0565b600082840290508284828161105457fe5b04146110ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806118516021913960400191505060405180910390fd5b809150505b92915050565b6110be6116a2565b60006110ca600361183d565b9050600061110c6305f5e1006110fe60346110f0600a548761103090919063ffffffff16565b610d8290919063ffffffff16565b610d8290919063ffffffff16565b9050600061112561a8c042610d8290919063ffffffff16565b90506040518060600160405280600115158152602001838152602001438152506004600083815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020155905050807fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde483600a54604051808381526020018281526020019250505060405180910390a25b600460006111ea600184610fe690919063ffffffff16565b815260200190815260200160002060000160009054906101000a900460ff1615801561124957507f0000000000000000000000000000000000000000000000000000000000000000611246600183610fe690919063ffffffff16565b10155b156113265760405180606001604052806001151581526020018381526020014381525060046000611284600185610fe690919063ffffffff16565b815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020155905050807fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde483600a54604051808381526020018281526020019250505060405180910390a261131f600182610fe690919063ffffffff16565b90506111d2565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bbb30c5d306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156113ad57600080fd5b505afa1580156113c1573d6000803e3d6000fd5b505050506040513d60208110156113d757600080fd5b81019080805190602001909291905050506113f45750505061151a565b60008214156114055750505061151a565b6003604051806040016040528043815260200161142b8587610f5e90919063ffffffff16565b81525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156114fe57600080fd5b505af1158015611512573d6000803e3d6000fd5b505050505050505b565b600080831182906115c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561158d578082015181840152602081019050611572565b50505050905090810190601f1680156115ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816115d457fe5b049050809150509392505050565b600083831115829061168f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611654578082015181840152602081019050611639565b50505050905090810190601f1680156116815780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600060075414156116bb57600554600a8190555061183b565b60006116c7600361183d565b9050600060075482106116ee576116e960075483610fe690919063ffffffff16565b611704565b61170382600754610fe690919063ffffffff16565b5b905060006117336007546117256305f5e1008561103090919063ffffffff16565b610d8290919063ffffffff16565b90506000611761620f42406117536008548561103090919063ffffffff16565b610d8290919063ffffffff16565b9050600060075485106117b4576117af6305f5e1006117a1611790856305f5e100610fe690919063ffffffff16565b600a5461103090919063ffffffff16565b610d8290919063ffffffff16565b6117f6565b6117f56305f5e1006117e76117d6856305f5e100610f5e90919063ffffffff16565b600a5461103090919063ffffffff16565b610d8290919063ffffffff16565b5b9050600554600a54101561181257600554600a81905550611835565b600654600a54111561182c57600654600a81905550611834565b80600a819055505b5b50505050505b565b60006118498243610dcc565b905091905056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a264697066735822122014440403ed78e9b2ee520544b48c5c10e1f1c0e7a4d96e0c87fead5a341d967b64736f6c634300060c0033";