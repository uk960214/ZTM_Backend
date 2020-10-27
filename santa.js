console.time('santa start')
const fs = require('fs');

// Read File and Split to Instruction Array
const instructions = fs
                    .readFileSync('./input.txt')
                    .toString()
                    .split('');


// Loop According to Instructions

let floor = 0;
// let pos = 0;

for (i = 0; i < instructions.length; i++) {
  if (instructions[i] === '(') {
    floor++
  } else {
    floor--
    // if (floor < 0) {
    //   pos = i+1
    //   break
    // }
  }
}

console.log('destination floor: ' + floor)
// console.log('basement reached during: ' + pos)
console.timeEnd('santa start')