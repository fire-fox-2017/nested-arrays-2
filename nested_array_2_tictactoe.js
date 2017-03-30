function tic_tac_toe_board () {
  let tempTTTResult = [];
  let limitX = 0, limitY = 0;
  let tempRand;
  for (var i = 0; i < 3; i++) {
    let tempTTT= [];
    for (var j = 0; j < 3; j++) {
      tempRand = Math.floor(Math.random() * 2);
      if (tempRand === 0) {
        if (limitX <= 4) {
          tempTTT.push('x');
          limitX++;
        } else {
          tempTTT.push('o');
        }
      } else {
        if (limitY <= 4) {
          tempTTT.push('o');
          limitY++;
        } else {
          tempTTT.push('x');
        }
      }
      // tempTTT.push(j);
    }
    tempTTTResult.push(tempTTT);
  }

  return tempTTTResult;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
