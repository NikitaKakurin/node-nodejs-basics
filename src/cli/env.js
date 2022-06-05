export const parseEnv = () => {
  let out = [];
  let pattern = new RegExp('^RSS_[A-Za-z]+[0-9_]*');
  for(let i in process.env){    
    if(pattern.test(i)){
      out.push(`${i}=${process.env[i]}`);
    }
  }
  console.log(out.join('; '))
};

parseEnv();