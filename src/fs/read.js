import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const readFilePath = path.join(__dirname, 'files', 'fileToRead.txt' );

    try{
        const data = await fs.readFile(readFilePath); 
        console.log(data.toString());
    } catch(err){
        throw new Error('FS operation failed');
    }
};

read();