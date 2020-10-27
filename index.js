const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
  if(err) {
    console.log('error!');
  }
  console.log(data.toString());
})

const file = fs.readFileSync('./hello.txt')

console.log(file.toString());