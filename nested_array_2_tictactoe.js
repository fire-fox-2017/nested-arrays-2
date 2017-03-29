function tic_tac_toe_board () {
  var board = [];
  var o = ["o","o","o","o","o"];
  var x = ["x","x","x","x"];

  var ox = ["o","o","o","o"];
  var xo = ["x","x","x","x","x"];
  var random = Math.floor(Math.random() * 1000);{

  if (random > 900 && random < 1000) {
    for (var ah = 0; ah < 5; ah++){
      board.push(o[ah]);
    }
    for (var ag = 0; ag < 4; ag++){
      board.push(x[ag]);
    }
  }

  if (random > 800 && random < 900) {
    for (var ai = 0; ai < 4; ai++){
      board.push(ox[ai]);
    }
    for (var ap = 0; ap < 5; ap++){
      board.push(xo[ap]);
    }
  }

  if (random > 700 && random < 800) {
    for (var aq = 0; aq < 4; aq++){
      board.push(x[aq]);
    }
    for (var au = 0; au < 5; au++){
      board.push(o[au]);
    }
  }

  if (random > 600 && random < 700) {
    for (var as = 0; as < 5; as++){
      board.push(xo[as]);
    }
    for (var at = 0; at < 4; at++){
      board.push(ox[at]);
    }

  }

  if (random > 500 && random < 600) {
      for (var a = 0; a < 2; a++){
        board.push(o[a]);
      }
      for (var b = 0; b < 4; b++){
        board.push(x[b]);
      }
      for (var ax = 0; ax < 2; ax++){
        board.push(o[ax]);
      }

      for (var d = 0; d < 1; d++){
        board.push(x[d]);
      }
  }
  if (random > 400 && random < 500) {
      for (var f = 0; f < 1; f++){
        board.push(ox[f]);
      }
      for (var g = 0; g < 1; g++){
        board.push(xo[g]);
      }
      for (var h = 0; h <1; h++){
        board.push(ox[h]);
      }
      for (var i = 0; i < 2; i++){
        board.push(xo[i]);
      }
      for (var av = 0; av < 2; av++){
        board.push(ox[av]);
      }
      for (var ar = 0; ar < 2; ar++){
        board.push(xo[ar]);
      }
  }

  if (random > 300 && random < 400) {
      for (var k = 0; k < 1; k++){
        board.push(x[k]);
      }
      for (var l = 0; l < 1; l++){
        board.push(o[l]);
      }
      for (var m = 0; m < 1; m++){
        board.push(x[m]);
      }
      for (var n = 0; n < 2; n++){
        board.push(o[n]);
      }
      for (var ay = 0; ay < 2; ay++){
        board.push(x[ay]);
      }
      for (var aw = 0; aw < 2; aw++){
        board.push(o[aw]);
      }
  }
  if (random < 300){
    board.push(ox,xo);
  }
console.log(board);
}}

console.log(tic_tac_toe_board()) // => make a random tic tic board
