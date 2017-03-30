function randomNumber(){
  var ran = Math.floor(Math.random()*2)+1;
  return ran;
}
function tic_tac_toe_board () {
  var arr=[];
  var x=0;
  var o=0;
  for (var i=0; i<3; i++){
    arr.push([]);
  }
  for(var a=0; a<3; a++){
    for (var j=0; j<arr.length; j++){
        num = randomNumber();
        if(x===5){
          arr[j].push("o");
        }
        else if(o===5){
          arr[j].push("x");
        }
        else if(num === 1){
          arr[j].push("x");
          x+=1;
        }
        else if(num === 2){
          arr[j].push("o");
          o+=1;
        }
    }
  }
  return arr;
}

var line=tic_tac_toe_board();
console.log(line[0]);
console.log(line[1]);
console.log(line[2]);
