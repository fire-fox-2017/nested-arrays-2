function tic_tac_toe_board () {
  var angka_random = Math.floor(Math.random()*2);
  var X = '';
  var O = '';
  var hasil_sementara = [];
  var hasil = [];
  var sisa = true;
  var baris = 3;
  if (angka_random === 1){
    X = 5;
    O = 4;
  } else {
    X = 4;
    O = 5;
  }

  while (sisa === true){
    var angka_random_dalam = Math.floor(Math.random()*2);

    if (angka_random_dalam === 1 && X > 0) {
      hasil_sementara.push("X");
      X = X - 1;
    }

    if (angka_random_dalam === 0 && O > 0){
      hasil_sementara.push("O");
      O = O - 1;
    }

    if (X === 0 && O === 0){
      sisa = false;
    }
  }

  while (hasil_sementara.length > 0){
  hasil.push(hasil_sementara.splice(0, baris));
  }

  return hasil;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
