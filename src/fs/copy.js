import { mkdir } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const sourceFolderPath = path.join(__dirname, 'files');
    const targetFolderPath = path.join(__dirname, 'files_copy');

    try{
      await fs.mkdir(targetFolderPath);
      await fs.access(sourceFolderPath);     
    } catch(err){
        throw new Error('FS operation failed');
    }
    await fs.cp(sourceFolderPath, targetFolderPath, {recursive:true});
};

copy();