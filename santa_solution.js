const fs = require('fs');


// question 1
function question1() {
  fs.readFile('./input.txt', (err, data) => {
    console.time('santa time');
    const instructions = data.toString();
    const instructionsArray = instructions.split('');
    const answer = instructionsArray.reduce((acc, currentValue) => {
      if (currentValue === '(') {
        return acc += 1
      } else if (currentValue === ')') {
        return acc -= 1
      }
    }, 0)
    console.timeEnd('santa time');
    console.log('floor: ', answer);
  })
}

// question1()

// question 2

function question2() {
  fs.readFile('./input.txt', (err, data) => {
    console.time('santa time');
    const instructions = data.toString();
    const instructionsArray = instructions.split('');


    let accumulator = 0;
    let counter = 0;

    const answer = instructionsArray.some((currentValue) => {
      if (currentValue === '(') {
        accumulator += 1
      } else if (currentValue === ')') {
        accumulator -= 1
      }
      counter ++
      return accumulator < 0;
    })
    console.timeEnd('santa time');
    console.log('basement first entered at :', counter)
  })
}

question2()
