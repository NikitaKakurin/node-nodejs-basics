import fs from 'fs';
import { Transform, pipeline } from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';

export const transform = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const reversTransform = new Transform({
    transform(chunk, enc, cb ){
      const shortChunk = chunk.toString().trim()
      const reverseShortChunk = shortChunk.split('').reverse().join('');
      this.push( `${reverseShortChunk}\n` );
      cb()
    }
  })

  pipeline(
    process.stdin,
    reversTransform,
    process.stdout,
    (err) => {
      if(err) {
        console.error('Pipeline failed.', err);
      }
    }
  )
};

transform()


