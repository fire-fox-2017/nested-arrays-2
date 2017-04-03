function tic_tac_toe_board () {
  // ...
  var arrXO=[];
  var hasil=[];
  var randomNumber=Math.floor(Math.random()*1234);
  var indexSekarang = arrXO.length;
  var nilaiSementara=0;
  var indexAcak=0;

// Memilih Jumlah X dan O secara Acak
  if(randomNumber%2===0)
  {
    for(var i=0;i<5;i++)
    {
      arrXO.push("X");
    }
    for(var j=0;j<4;j++)
    {
      arrXO.push("O");
    }
  }
  else {
      for(var k=0;k<5;k++)
      {
        arrXO.push("O");
      }
      for(var l=0;l<4;l++)
      {
        arrXO.push("X");
      }
    }


//Mengisi Potongan Kedalam Tic_tac_toe_board
  for(var n=0;n<3;n++)
  {
    if(n===0)
    hasil.push(arrXO.slice(0,3));
    else if(n===1) {
      hasil.push(arrXO.slice(3,6));
    }
    else
    {
      hasil.push(arrXO.slice(6,9));
    }
  }

  //mengacak X O
   while (0 !== indexSekarang) {
     indexAcak = Math.floor(Math.random()*indexSekarang)%2;
     indexAcak = indexAcak-indexSekarang;
     indexSekarang -= 1;
     nilaiSementara = hasil[indexSekarang];
     hasil[indexSekarang] = hasil[indexAcak];
     hasil[indexAcak] = nilaiSementara;
  }
  return hasil;
}
console.log(tic_tac_toe_board()) // => make a random tic tic board
