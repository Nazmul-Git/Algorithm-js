// let sum=0;
// const recursion=(n)=>{
//     if(n==0) return;
//     sum+=n;
//     recursion(n-1);
// };
// let result=recursion(10);
// console.log(result); //undefined 
// console.log(sum); //55

// solve
const recursion=(n)=>{
    if(n==0) return n;
    return n + recursion(n-1);
};
let result=recursion(10);
console.log(result); //55
