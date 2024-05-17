import fsp from 'fs/promises';

// BEGIN
export async function reverse(filePath) {
    try {
     
      const data = await fsp.readFile(filePath, 'utf-8');
      
     
      const reversedData = data.split('\n').reverse().join('\n');
      
      
      await fsp.writeFile(filePath, reversedData);
    } catch (error) {
      console.error(`Error processing file ${filePath}:`, error);
    }
  }
// END