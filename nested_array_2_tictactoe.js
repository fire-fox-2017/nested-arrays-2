function tic_tac_toe_board () {
  // ...
  var x=0;
  var o=0;
  var arrTicTac=[];
  function randomTicTac(){
    var random = Math.floor(Math.random() * 2);
    if(random === 0){
      o++;
      if(o>4){
        return 'x';
      }else {
        return 'o';
      }
    }else{
      x++;
      if(x>4){
        return 'o';
      }else {
        return 'x';
      }
    }
  }

  for(var i=0;i<3;i++){
    arrTicTac.push([]);
    for(var j=0;j<3;j++){
      arrTicTac[i].push(randomTicTac());
    }
  }
  return arrTicTac;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
