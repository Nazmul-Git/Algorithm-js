// Sum of Digits
const sumOfDigits=(n)=>{
    if(n<10) return n;
    let newDigit=Math.floor(n/10);
    return (n%10)+ sumOfDigits(newDigit);
}
// console.log(sumOfDigits(1279));


// traverse an array / function  er loop
// indexing way
const traverse=(arr, i)=>{
    if(i===arr.length) return;
    console.log(arr[i]);
    traverse(arr, i+1);
    return arr;
}
console.log(traverse([5,10,15,20,25,30], 0))


// sum of array numbers
const sum=(arr,i)=>{
    if(i===arr.length-1) return arr[i];
    return arr[i] + sum(arr,i+1);
}
console.log(sum([5,10,15,20,25,30], 0))



// array reverse
// const reverseArr=(arr,start,end)=>{
//     if(start>end) return;
//     let temp=arr[start];
//     arr[start]=arr[end];
//     arr[end]=temp;
//     reverseArr(arr, start+1, end-1);
//     return arr;
// };
// let arr=[10,20,30,40,50,60,70,80,90,100];
// console.log(reverseArr(arr,0,arr.length-1))

// palindrome 
const palindrome=(arr,start,end)=>{
    if(start>end) return true;
    else if(arr[start]!==arr[end]) return false;
    else{
        return palindrome(arr, start+1, end-1);
        
    }
    
};
let arr=['a','b','c','b','a'];
console.log(palindrome(arr,0,arr.length-1))
