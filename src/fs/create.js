import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';


export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const data = 'I am fresh and young';
  const filePath = path.join(__dirname, 'files','fresh.txt');
  
  try{
    await fs.writeFile(filePath, data,{flag:'wx'})
  } catch(err){
    throw new Error('FS operation failed');
  }
}
create();