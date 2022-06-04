export const parseArgs = () => {
  let out = [];
  let pattern = new RegExp('^--[A-Za-z_]+[0-9]*');
  for(let i = 0; i < process.argv.length; i++){
      if(pattern.test(process.argv[i])){
          out.push(`${process.argv[i].slice(2)} is ${process.argv[i+1]}`);
      }
  }
  console.log(out.join(', '))
};

parseArgs();