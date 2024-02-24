const LCM = (a, b) => {
  let maxNum = a > b ? a : b;
  for(let i=maxNum; i<=a*b; i++){
    if(i%a===0 && i%b===0){
        return i;
    }
  }
};
console.log(LCM(3, 7));
