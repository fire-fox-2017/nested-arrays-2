function tic_tac_toe_board () {
  // ...
var x;
var o;
var arr=[];
 var acak = Math.floor(Math.random()*2);
if (acak===1){
	x=4;
}
else {
x=5;
}
o=9-x;
for (var i=0; i<3; i++){
	arr.push([]);
	for (var a=0; a<3; a++){
		var rand=Math.floor(Math.random()*2);
		var tmp;
		if(rand===1){
			if(x>0){
			tmp='x';
			x--;
			}
			else {
				tmp='o';
				o--;
			}
			}
		else {
			if (o>0){
				tmp='o';
				o--;
			}
			else{
				tmp='x';
				x--;
			}
		}

		arr[i].push(tmp);
	}
}
return arr;
}

console.log(tic_tac_toe_board()); // => make a random tic tic board
