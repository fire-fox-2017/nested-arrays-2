function tic_tac_toe_board () {
  // populate a board
  let board = [];
  let countX = 0;
  let countO = 0;

  for (let row = 0 ; row < 3 ; row++) {
    let column = [];

    for (let col = 0 ; col < 3 ; col++) {
      let random = Math.floor(Math.random() + 0.5);
      // console.log(random);
      if (random) {
        if(countX == 5) {
          column.push('O');
          countO++;
        } else {
          column.push('X');
          countX++;
        }
      } else {
        if(countO == 5) {
          column.push('X');
          countX++;
        } else {
          column.push('O');
          countO++;
        }
      }
    }
    board.push(column);
  }


  console.log("X = " + countX + ", O = " + countO);
  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
