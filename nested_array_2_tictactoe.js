function tic_tac_toe_board () {
  // ...
function random_tic_tac(){
  var good = 0;
  var bad = 0;
  var str = '';
  var random = Math.floor(Math.random()*2);
if(random === 0){
  if(good > 4){
    good++;
    str='X';
  }else {
    return str= 'O'
  }
}else{
  if(bad > 4){
    bad++;
    str= 'O';
  }else{
    str= 'X'
  }
}
return str;

}

var board = [];
for (var i =  0; i < 3; i ++){
  var newArr = [];
  board.push(newArr);
  for (var j = 0 ; j < 3; j ++){
    board[i].push(random_tic_tac());
    // board[i];
  }
}
return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
