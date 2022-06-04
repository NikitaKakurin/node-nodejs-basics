import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';

export const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
  const pathToArchive = path.join(__dirname, 'files', 'archive.gz');

  const readableStream = fs.createReadStream(pathToArchive);
  const writeableStream = fs.createWriteStream(pathToFile);
  const unzip = zlib.createUnzip();

  pipeline(
      readableStream,
      unzip,
      writeableStream,
      (err) => {
        if (err) {
          console.error('Pipeline failed.', err);
        }
      }
    )
}

decompress();