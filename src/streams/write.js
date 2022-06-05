import fs from 'fs';
import { pipeline } from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');
  const writeableStream = fs.createWriteStream(pathToFile);

  pipeline(
    process.stdin,
    writeableStream,
    (err) => {
      if(err) {
        console.error('Pipeline failed.', err);
      }
    }
  )
};

write();