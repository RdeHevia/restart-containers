const sleep = async ms => {
  return new Promise(resolve => setTimeout(resolve, ms)); 
}

(async() => {
  while (true) {
    await sleep(30*1_000);
  }
})();