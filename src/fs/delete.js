import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const targetFilePath = path.join(__dirname, 'files', 'fileToRemove.txt');
    try{
        await fs.unlink(targetFilePath); 
      } catch(err){
          throw new Error('FS operation failed');
      }
};
remove();