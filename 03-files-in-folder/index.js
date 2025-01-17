const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');

function logFileDetails(filePath, fileName) {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        return console.error(err.message);
      }
      const {name, ext} = path.parse(fileName);
      console.log(`${name} - ${path.extname(fileName).slice(1)} - ${stats.size} bytes`);
    });
  }

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
    if (err) {
        return console.error(err.message);
    }
  
    files
        .filter((file) => file.isFile())
        .forEach((file) => {
          const filePath = path.join(folderPath, file.name);
          logFileDetails(filePath, file.name);
        });
});