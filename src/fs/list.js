import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const targetFilePath = path.join(__dirname, 'files');
  try{
    const list = await fs.readdir(targetFilePath); 
    console.log(list)
  } catch(err){
    throw new Error('FS operation failed');
  }
};
list();