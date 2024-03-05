
const sumOfDigits=(n)=>{
    if(n<10) return n;
    let newDigit=Math.floor(n/10);
    return (n%10)+ sumOfDigits(newDigit);
}
console.log(sumOfDigits(1279));