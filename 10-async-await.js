import fsp from 'fs/promises';

// BEGIN
export async function exchange(file1Path, file2Path) {
    try {
    
      const data1 = await fsp.readFile(file1Path, 'utf-8');
      const data2 = await fsp.readFile(file2Path, 'utf-8');
  
    
      await fsp.writeFile(file1Path, data2, 'utf-8');
      await fsp.writeFile(file2Path, data1, 'utf-8');
    } catch (err) {
    
      console.error(`Error exchanging files:`, err);
    }
  }
// END