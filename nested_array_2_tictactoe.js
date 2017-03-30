function tic_tac_toe_board () {
  // ...
  let board = [];

  let row = 3;
  let col = 3;

  let minLimit = 4;
  let maxLimit = 5;

  let symbol = ["O", "X"];
  let symbolCount = [0,0];

  let checkCount = (index) => {
    if (index === 0) {
      if (symbolCount[0] < maxLimit) {
        symbolCount[0] += 1;
        return 0;
      } else {
        symbolCount[1] += 1;
        return 1;
      }
    } else {
      if (symbolCount[1] < maxLimit) {
        symbolCount[1] += 1;
        return 1;
      } else {
        symbolCount[0] += 1;
        return 0;
      }
    }
  }

  let randomize = () => {
    var index = Math.floor(Math.random()*symbol.length);
    return checkCount(index);
  }

  for (let i = 0; i < row; i++) {
    board.push([]);
    for (let j = 0; j < col; j++) {
      board[i].push(symbol[randomize()]);
      // console.log(symbolCount);
    }
  }


  return board;

}

console.log(tic_tac_toe_board()) // => make a random tic tic board
