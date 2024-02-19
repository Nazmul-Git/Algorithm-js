// isPrime
///////////// O(n) /////////////
// const isPrime=(n)=>{
//     let count=0;
//     for(let i=1;i<n; i++){
//         if(n%2===0){
//             count++
//         }
//     }
//     if(count >=2 ) return false;
//     else return true;
// };
// console.log(isPrime(11))

////////////// O(n) ////////////////
// const isPrime=(n)=>{
//     let count=0;
//     for(let i=1;i<n/2; i++){
//         if(n%2===0){
//             count++
//         }
//     }
//     if(count >=2 ) return false;
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
