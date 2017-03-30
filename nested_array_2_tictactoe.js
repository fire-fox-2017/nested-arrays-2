function tic_tac_toe_board () {

  let random = 0
  let countx = 0
  let counto = 0
  // let num = Math.round(Math.random())
  let board = []
  for (var a=0; a<3; a++) {
    board[a] = []

    for (var b=0; b<3; b++) {
      let random = Math.round(Math.random())
      if (random < 1) {
        countx++
        if (countx < 6) {
          board[a][b] = 'x'
        } else board[a][b] = 'o'
      } else {
        counto++
        if (counto < 6) {
          board[a][b] = 'o'
        } else board[a][b] = 'x'
      }
    }
  }
    console.log(board)
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
