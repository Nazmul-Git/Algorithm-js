// isPrime
///////////// O(n) /////////////
// const isPrime1=(n)=>{
//     let count=0;
//     for(let i=1;i<n/2; i++){
//         if(n%2===0){
//             count++
//         }
//     }
//     if(count >=2 ) return false;
//     else return true;
// };
// console.log(isPrime1(11))
// console.log(isPrime1(100))

////////////// O(n) ////////////////
// const isPrime=(n)=>{
//     let count=0;
//     for(let i=1;i<n/2; i++){
//         if(n%2===0){
//             count++
//         }
//     }
//     if(count >1 ) return false;
//     else return true;
// };
// console.log(isPrime(11))
// console.log(isPrime(10))
//n/2
// suppose, 10 and 10's multiple are
// 1*10
// 2*5
// 5*2
// 10*1
// here loop will be execute 10/2 = 5 times and get-->1*10, 2*5 
// if loop execute 10 times then we get.. 1*10, 2*5, 5*2, 10*1 but here 1*10 as same as 10*1 also 2*5 as the same as 5*2.
// SO WE CAN SAY THAT, THIS SOLUTION IS LITTLE BETTER OPTIMIZE of O(n) 


//////////////////////  O(sqrt(n))  /////////////////////
// const isPrime=(n)=>{
//     let count=0;
//     for(let i=1;i< Math.sqrt(n); i++){
//         if(n%2===0){
//             count++
//         }
//     }
//     if(count > 1 ) return false;
//     else return true;
// };
// console.log(isPrime(11))
// console.log(isPrime(100))
// console.log(isPrime(2))
//  loop will be  execute 10 times cz, squire root of 100 is 10
// console.log(Math.sqrt(11))//3



//////////////////////////// Prime Factorization //////////////////
// const primeFactorization=(num)=>{
//     let arr=[];
//     for(let i=2; i<=num; i++){
//         while(num%i===0){
//             arr.push(i);
//             num=num/i;
//         }
//     }
//     return arr;
// }
// console.log(primeFactorization(18));