// n should be received from main thread
import {workerData, parentPort} from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    const n = workerData;
    try{
        return {status: 'resolved', data: nthFibonacci(n)};
    } catch(err){
        return {status: 'error', data: null};
    }
};

parentPort.postMessage(sendResult())