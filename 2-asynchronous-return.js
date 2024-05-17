import fs from 'fs';

// BEGIN
export default function write(filePath, data, callback) {
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error(`Error writing file at path ${filePath}:`, err);
      } else {
        callback();
      }
    });
  }
// END