import { spawn } from 'child_process'
import path from 'path';
import { fileURLToPath } from 'url';
export const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'script.js');    
  const child = spawn('node' ,[pathToFile, ...args]  )

  child.stdout.on('data', (data) => {
      console.log('stdout: ' + data.toString().trim());
  });
   
  process.stdin.on('data', data => {
    child.stdin.write(data.toString().trim())
  }); 

  child.stderr.on('data',(data) => {
     console.log('stderr: ' + data);
  });

  child.on('close', (code) => {
    console.log(`child process exited with code: ${code}`);
  });
}

const nodeArgs = process.argv.slice(2);
spawnChildProcess(nodeArgs);