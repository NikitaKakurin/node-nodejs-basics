import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const readableStream = fs.createReadStream(pathToFile, 'utf-8');
  let data = '';
  for await( let chunk of readableStream){
     data += chunk;
  }
  const hash = crypto.createHash('sha256').update(data).digest('hex');
  return hash;
};
calculateHash().then(res => console.log(res));
