import fs from 'fs';

// BEGIN
export default async function print(filePath) {
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      console.log(data);
    } catch (error) {
      console.error(`Error reading file from path ${filePath}:`, error);
    }
  }
// END
