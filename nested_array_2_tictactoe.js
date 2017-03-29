function tic_tac_toe_board () {
  // ...
  var arr=[];
  var max1=0,max2=0;
  for(let i=0;i<3;i++){
    var arrTemp=[];
  //  for(let j=0;j<3;j++){
  let j=0;
  do{
      let acak=Math.floor((Math.random() * 2) + 1);
      if(acak%2==0&&max1<=4){
        arrTemp.push("X");
        max1++;
      }else if(max2<=4) {
        arrTemp.push("O");
        max2++;
      }
      j++
    }while (arrTemp.length<3) ;
    //}
    arr.push(arrTemp);
  }
  return arr;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
