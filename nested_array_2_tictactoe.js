function tic_tac_toe_board () {
  // ...
  //membuat sebuah game [O X O] pada board 3x3 dimana [O X O] secara acak sebanyak 3 kali
  let boardTic = []; // membuat variable array untuk menampung papan
  let panjangBoard = 3; // menentukan panjang array O dan X yaitu sebanyak 3
  //menentukan jumlah x dan y dalam 5 atau 4 pada salah satunya menggunakan es6
  //dengan ini maka x dan y berjumlah 9 (board 3x3)
  let obj_O = (Math.round(Math.random()) === 0) ? 5 : 4;
  //kondisi di atas untuk menerangkan bahwa jika hasil perhitungan menghasilkan 0
  //maka ia akan memasukan nilai 5 jika bukan maka ia bernilai 4
  let obj_X = 9 - obj_O; //jumlah X hanya tinggal sisa dari O
  //membuat array untuk mengisi board
  for (let i=0; i<panjangBoard; i++){
    boardTic.push([]); // membuat array lagi di dalam variable array boardTic sehinga menjadi array 2 dimensi
    for (let j=0; j<panjangBoard; j++){ //membuat looping nested untuk memasukkan array 2 dimensi
      //memakai kondisi dengan metdhod Math.random secara Math.round(pembulatan kebawah)
      if (Math.round(Math.random())===0){
        value = obj_O > 0 ? "o" : "x"; //kondisi dengan es6 jika isi dari perhitungan atas jika 0 maka akan mengembalikan
        // 'O' dan jumlah o berkurang
        obj_O--;
      } else {
        value = obj_X > 0 ? "x" : "o";
        //jika bukan akan menghitung balik X
        obj_X--;
      }
      boardTic[i].push(value);
    }
  }
  return boardTic;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
