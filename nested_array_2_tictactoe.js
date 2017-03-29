function tic_tac_toe_board () {
  // ...
  let board = [];
  let boardLength = 3;
  let numberX = 0;
  let numberO = 0;

  for(let i = 0; i < boardLength; i++) {
    board.push([]);
    for(let j = 0; j < boardLength; j++) {
      board[i].push(randomCheckerGenerator());
    }
  }

  function randomCheckerGenerator() {
    
    var random = Math.floor(Math.random() * 2);

    if(random === 0) {
      numberO++;
      if(numberO > 5) {
        return 'O'
      } else {
        return 'X'
      }
    } else {
      numberX++;
      if(numberX > 5) {
        return 'X';
      } else {
        return 'O';
      }
    }
  }
  
  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
