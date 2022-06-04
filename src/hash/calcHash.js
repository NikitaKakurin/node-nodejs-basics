import fs from 'fs';
import { pipeline } from 'stream';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const readableStream = fs.createReadStream(pathToFile, 'utf-8');
  let data = '';
  readableStream.on('data', (chunk) =>{
    data += chunk.toString();
  })
  readableStream.on('end', (chunk) =>{
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    console.log(hash)
  })
};
calculateHash()