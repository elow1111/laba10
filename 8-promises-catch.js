import fsp from 'fs/promises';

// BEGIN
export async function touch(filePath) {
    try {
      await fsp.access(filePath);
      
    } catch (err) {
    
      await fsp.writeFile(filePath, '', 'utf-8');
    }
  }
// END