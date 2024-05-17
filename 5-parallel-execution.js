import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export function getDirectorySize(dirPath, callback) {
    fs.readdir(dirPath, (readErr, files) => {
      if (readErr) {
        callback(readErr);
        return;
      }
  
      const filePaths = files.map(file => path.join(dirPath, file));
  
      async.map(filePaths, (filePath, cb) => {
        fs.stat(filePath, (statErr, stats) => {
          if (statErr) {
            cb(statErr);
            return;
          }
          if (stats.isFile()) {
            cb(null, stats.size);
          } else {
            cb(null, 0);
          }
        });
      }, (mapErr, results) => {
        if (mapErr) {
          callback(mapErr);
          return;
        }
        const totalSize = _.sumBy(results);
        callback(null, totalSize);
      });
    });
  }
// END
