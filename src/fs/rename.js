import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';



export const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt' );
  const newPath = path.join(__dirname, 'files', 'properFilename.md');
  let isFileExist;
  try{
    await fs.access(newPath); 
    isFileExist=true;
  } catch (err){
    isFileExist=false;
  }

  if (isFileExist) {
    throw new Error('FS operation failed');
  }

  try{
    await fs.rename(oldPath, newPath); 
  } catch(err){
      throw new Error('FS operation failed');
  }
};

rename();