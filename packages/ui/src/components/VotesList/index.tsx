import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
} from "@material-ui/core";

import { AragonContext } from "contexts";

import { Vote } from "services/aragon/types";
import { 
  VoteProposalButtons,
  // Counter,

} from "components";
import useStyles from "components/VotesList/styles";

function VotesList() {  
  const classes = useStyles()
  const aragonContext = useContext<any | null>(AragonContext);
  
  const voteItems = (vote: Vote, voteIndex: number) => {
    voteIndex = Number(vote.id.slice(- 4))
    return (
      <Box className={classes.voteItem} key={voteIndex}>
        <Box>
          <p>Vote #: { voteIndex }</p>
          <p>Vote ID: { vote.id.slice(- 4) }</p>
        </Box>
        <Box>
          <p>Description of Vote: { vote.metadata }</p>
        </Box>
        {/*
        <Box>
          <Counter countDownDate="Jan 1, 2021 00:00:00" />
        </Box>
        */}
        <VoteProposalButtons voteIndex={voteIndex} />
      </Box>
    )
  }
    
  return (
    <>
      { 
        aragonContext.votes.length > 0 ? (
          <Typography variant="h5" className={classes.voteListTitle}>
            Vote List
          </Typography>
        )
        : (
          <Typography variant="h5" className={classes.voteListTitle}>
            Loading vote proposals...
          </Typography>
        )
      }
      <Box>
        {
          aragonContext.votes.map(voteItems).slice(0, 5)
        }
      </Box>

    </>
  );
}

export default VotesList;