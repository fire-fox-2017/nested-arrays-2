function tic_tac_toe_board () {
  // populate a board
  let board = [];
  for (let row = 0 ; row < 3 ; row++) {
    let column = [];

    for (let col = 0 ; col < 3 ; col++) {
      let random = Math.floor(Math.random() + 0.5);
      console.log(random);
      if (random)
        column.push('X');
      else
        column.push('O');
    }
    board.push(column);
  }

  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
