import fs from 'fs';
import { pipeline } from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

  pipeline(
    fs.createReadStream(pathToFile,'utf-8'),
    process.stdout,
    (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } 
    }
  )
};

read();