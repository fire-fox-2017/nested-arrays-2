function tic_tac_toe_board () {
    var box = [];
    let huruf = 'OX';
    let random = huruf.charAt(Math.floor(Math.random() * 2))
  for (let i = 0; i < 3; i++){
    box.push([])
    for (let j = 0; j < 3; j++){
    box[i].push(huruf.charAt(Math.floor(Math.random() * 2)))
  } }

  console.log(box);
    }

console.log(tic_tac_toe_board()) // => make a random tic tic board
