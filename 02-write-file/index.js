const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = process;

const filePath = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(filePath);

stdout.write('Hi! Write something:\n');

stdin.on('data', (data) => {
  const input = data.toString().trim();

  if (input.toLowerCase() === 'exit') {
    handleExit();
  } else {
    output.write(input + '\n');
  }
});

process.on('SIGINT', handleExit);

function handleExit () {
  stdout.write('Good luck!\n');
  exit();
}
