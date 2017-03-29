function tic_tac_toe_board () {
  // ...
  let sisaX;
  let sisaO;
  let sisa=true;
  let rand = Math.floor((Math.random() * 2));
  if(rand==1){
    sisaX=5;
    sisaO=4;

  }else{
    sisaX=4;
    sisaO=5;
  }

  var tampung=[];
  let tampungBoard=[];

  while (sisa) {
    rand = Math.floor((Math.random() * 2));
    if(rand==1 && sisaX>0){
      sisaX--;
      tampung.push('X');
    }
    if(rand==0 && sisaO>0){
      sisaO--;
      tampung.push('O');
    }
    if(sisaO===0&&sisaX===0){
      sisa=false;
    }
  }

  for(let i = 0;i <= 7;i=i+3 ){
  //  console.log(i+" "+(i+2));
    tampungBoard.push(tampung.slice(i,(i+3)));
  }
  return tampungBoard;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
