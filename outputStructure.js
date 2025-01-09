const data = {
  team: name,
  total: score, //getTotals(batterScore + extras)
  wicketsLost: 11,
  extras: { noballs: 0, wides: 0, byes: 0, legbyes: 0 },
  batters: {
    name: {
      runsScored: 0,
      ballsFaced: 0,
      fours: 0,
      sixes: 0,
      out: {
        by: { c: "me", b: "u" },
        kind: "c", //c | b | run out | not out | lbw | st
      },
    },
  },
  bowlers: {
    name: {
      oversBowled: 0,
      runsGiven: 0, //don't consider byes and legbyes only wides and no balls
      wicketsTaken: 0,
    },
  },
};

const functions = [organizeData, calculateTotalScore];

//return [ or(innings1), or(innings2) ]

/* organizeData => 
  input: innings
  operation: splits the data and stores in respective variables, 
             calls all the functions with repective data
  output: { data }
*/

const testCases = [];
