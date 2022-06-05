import { spawn } from 'child_process'
import path from 'path';
import { fileURLToPath } from 'url';
export const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'script.js');    
  const worker = spawn('node' ,[pathToFile, ...args]  )

  worker.stdout.on('data', (data) => {
      console.log('stdout: ' + data);
  });
   
  process.stdin.on('data', data => worker.stdin.write(data)); 

  worker.stderr.on('data',(data) => {
     console.log('stderr: ' + data);
  });
}

const nodeArgs = process.argv.slice(2);
spawnChildProcess(nodeArgs);