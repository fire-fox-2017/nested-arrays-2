function tic_tac_toe_board () {
  // ...
  let board = [];
  let x = "x";
  let o = "o";

  for(let i = 0; i < 3; i++){
    let tampung = []
    board.push(tampung)
    for(let j = 0; j < 3; j++){
      tampung.push("")
    }
  }
// console.log(arr.join("").match(/2/g).length)
let jumlahX = 0;
let jumlahO = 0;
  for(let k = 0; k < 3; k++){
    for(let l = 0; l < 3; l++){
      let random = (Math.random()<0.5);
      if(jumlahX < 4 && random){
          jumlahX++;
          board[k][l] = "x";
      } else if(jumlahO < 4 && !random){
          jumlahO++;
          board[k][l] = "o";
      } else {
          if(!random){
            board[k][l] = "x";
            jumlahX++
          } else {
            jumlahO++;
            board[k][l] = "o";
          }
      }
    }
  }

  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
