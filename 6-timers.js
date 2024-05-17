import fs from 'fs';

// BEGIN
export default function watch(filepath, interval, callback) {
    let lastModifiedTime = null;
  
    const checkFile = () => {
      fs.stat(filepath, (err, stats) => {
        if (err) {
          clearInterval(timerId);
          callback(err);
          return;
        }
  
        const mtimeMs = stats.mtimeMs;
        if (lastModifiedTime !== null && mtimeMs > lastModifiedTime) {
          callback(null);
        }
        lastModifiedTime = mtimeMs;
      });
    };
  
    checkFile(); // Initial check to set the lastModifiedTime
  
    const timerId = setInterval(checkFile, interval);
    return timerId;
  }
// END
