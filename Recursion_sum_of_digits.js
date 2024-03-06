// Sum of Digits
const sumOfDigits=(n)=>{
    if(n<10) return n;
    let newDigit=Math.floor(n/10);
    return (n%10)+ sumOfDigits(newDigit);
}
// console.log(sumOfDigits(1279));


// traverse an array / function  er loop

const traverse=(arr, i)=>{
    if(i===arr.length) return;
    console.log(arr[i]);
    traverse(arr, i+1);
    return arr;
}
console.log(traverse([5,10,15,20,25,30], 0))