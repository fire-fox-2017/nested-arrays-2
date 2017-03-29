function tic_tac_toe_board () {
  // ...
  var array = [];
  var array2 = [];
  var x = 0;
  var o = 0;

  for(var i = 0;i<9;i++){
    if(x<5){
      if(Math.random()<0.5){
        if(o<5){
          array.push('o');
          o++;
        } else {
          array.push('x');
          x++
        }
      } else{
        array.push('x');
        x++
      }
    } else  {
    array.push('o');
    o++;
    }
  }
  // array.push(x);
  // array.push(o);
  // return array;
  for(j=0;j<array.length;j+=3){
    array2.push(array.slice(j,j+3));
  }
  return array2;
}
console.log(tic_tac_toe_board()) // => make a random tic tic board
//console.log(tic_tac_toe_board())
//console.log(tic_tac_toe_board())
//console.log(tic_tac_toe_board())
//console.log(tic_tac_toe_board())
