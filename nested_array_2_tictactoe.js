function tic_tac_toe_board() {

    let tic_tac_toe = ['O', 'X'];
    let board = [];
    let jumlahX = 0;
    let jumlahO = 0;

    for (var i = 0; i < 3; i++) {
      board.push([]);
    }

    for (var baris = 0; baris < board.length; baris++) {
        for (var kolom = 0; kolom < board.length; kolom++) {
          var angka = Math.floor(Math.random() * 2) + 1;

          if(jumlahO === 5){
            board[baris].push('X');
          } else if(jumlahX === 5){
            board[baris].push('O');
          } else if(angka === 1){
            board[baris].push('O');
            jumlahO++;
          } else if(angka === 2){
            board[baris].push('X');
            jumlahX++;
          }

        }
    }

    return board;

}

console.log(tic_tac_toe_board()) // => make a random tic ticboard
