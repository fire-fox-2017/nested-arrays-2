function tic_tac_toe_board() {
    let place = [],
        x = 0,
        o = 0;
    let place2 = [];
    //generate

    //template
    for (let i = 0; i < 3; i++) {
        place.push([]);
        for (let y = 0; y < 3; y++) {
            // console.log(getRandomNumber(0,1))
            var random = getRandomNumber(0, 1);
            if (random === 0 && o < 4) {
                place[i].push('o');
                o++;
            } else {
                place[i].push('x');
                x++;
            }
        }
    }

    for(let b=0; b<place.length; b++){
      place2.push(place[b].join('|'))
    }

    // console.log(x)
    // console.log(o)
    return place2.join('\n')
}

function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
// tic_tac_toe_board()
console.log(tic_tac_toe_board()) // => make a random tic tic board
