let sum=0;
const recursion=(n)=>{
    if(n==0) return;
    recursion(n-1);
    sum+=n;
    console.log(sum)
};
let result=recursion(3);
console.log(result); //undefined 
console.log(sum); //55

// solve
// const recursion=(n)=>{
//     if(n==0) return n;
//     return n + recursion(n-1);
// };
// let result=recursion(10);
// console.log(result); //55


