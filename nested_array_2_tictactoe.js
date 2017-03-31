function tic_tac_toe_board () {
  // ...
  let i=0;
  let nilaiRandom;
  let arrNilai=[];
  let ganjil=0;
  let genap=0;


  do{
    nilaiRandom = Math.floor(Math.random()*10);
    if(nilaiRandom%2==0){
      genap++;
      if(genap<=5){
        arrNilai.push('O');
      }

      else{
        arrNilai.push('X');
      }
    }

    else{
      ganjil++;
      if(ganjil<=5){
        arrNilai.push('X');
      }

      else{
        arrNilai.push('O');
      }
    }
  }while(arrNilai.length<9);

  let k=0;
  let hasil;
  for(let i=0;i<3;i++){
    hasil=[];
    for(let j=0;j<3;j++){
      hasil.push(arrNilai[k]);
      k++;
    }
    console.log(hasil);
  }

}

console.log(tic_tac_toe_board()) // => make a random tic tic board
