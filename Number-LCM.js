const LCM = (a, b) => {
  let maxNum = a > b ? a : b;
  while(1){
    if(maxNum%a===0 && maxNum%b===0){
        return maxNum;
    }
    ++maxNum;
  }
};
console.log(LCM(6, 4));
