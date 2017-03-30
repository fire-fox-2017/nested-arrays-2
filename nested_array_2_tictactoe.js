function tic_tac_toe_board () {
  // ...
  let papan = [];
  let jml = 3;
  var countX = 0;
  var countO = 0;
  for(let i=0; i<jml; i++) {
      papan.push([]);
      //console.log(papan);
        for(let j=0; j<jml; j++) {
          //console.log(j);
           let x1 = Math.floor(Math.random() * 2);
           console.log(`hasil random ${x1}`);
            if(i===0 ) {
                if(x1 === 0 && countX < 5) {
                    papan[i].push("X");
                    countX++;
                } else {
                    papan[i].push("O");
                    countO++;
                }

            } else if(i===1 ) {
                if(x1 === 0 && countX < 5) {
                    papan[i].push("X");
                      countX++;
                } else {
                    papan[i].push("O");
                      countO++;
                }

            } else if(i===2 ) {
              if(x1 === 0 && countX < 5) {
                    papan[i].push("X");
                      countX++;
                } else {
                    papan[i].push("O");
                      countO++;
                }

            }

        }

  }
    return papan;

}

console.log(tic_tac_toe_board()) // => make a random tic tic board
