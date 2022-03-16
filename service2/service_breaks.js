
const sleep = async ms => {
  return new Promise(resolve => setTimeout(resolve, ms)); 
}

(async() => {
  await sleep(30*1_000);
  throw new Error('I broke');
  await sleep(30*1_000);
})();