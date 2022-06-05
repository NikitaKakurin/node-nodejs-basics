import { parentPort, Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

export const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToWorker = path.join(__dirname, 'worker.js');    
  const numCpus = os.cpus().length;
  const result = [];

  function runWorker(i) {
    const worker = new Worker(pathToWorker, {
      workerData: 10+i,
    })

    worker.on('message', (message) => {
      console.log(message);
    })

    
  }


  async function run(i) {
    return await runWorker(i);       
  }
  
  
  function createRuns() {
    for (let i = 0; i < numCpus; i++) {
      run(i)
    }
  }
  createRuns();
};
performCalculations();