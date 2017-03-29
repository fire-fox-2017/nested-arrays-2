'use strict'

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format (nestedArray) {
  var arr=[];
  var obj1={};
  var obj2={};
  var obj3={};
  var obj4={};
  var obj5={};
  for (var i=0; i<roster[0].length; i++){
    for (var k=0; k<roster[1].length; k++){
      if(i===k){
        obj1[roster[0][i]]= roster[1][k];
        obj2[roster[0][i]]= roster[2][k];
        obj3[roster[0][i]]= roster[3][k];
        obj4[roster[0][i]]= roster[4][k];
        obj5[roster[0][i]]= roster[5][k];
      }
    }
  }
  arr.push(obj1);
  arr.push(obj2);
  arr.push(obj3);
  arr.push(obj4);
  arr.push(obj5);
  return arr;
}

let object_roster = convert_roster_format(roster)
console.log(object_roster);
console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true

module.exports = {
  convert_roster_format
}
