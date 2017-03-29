function tic_tac_toe_board () {
  let board = [];
  let boardLength = 3;
  // Menentukan banyak x dan y
  let o = (Math.round(Math.random()) == 0) ? 5 : 4;
  let x  = 9 - o;
  for (let i = 0; i < boardLength; i++) {
    board.push([]);
    for (let j = 0; j < boardLength; j++){
      if (Math.round(Math.random()) == 0) {
        value = o > 0 ? "o" : "x";
        o--;
      } else {
        value = x > 0 ? "x" : "o";
        x--;
      }
      board[i].push(value);
    }
  }
  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
