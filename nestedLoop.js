
// let n=5;
// for(let i=0; i<n; i++){  
//     console.log('*');  // 5 times
// }
// n^1


// for(let i=0; i<n; i++){  
//     for(let j=0; j<n; j++){
//         console.log('*');  // 25 times
//     }
// }
// n^2

// let count=0;
// for(let i=0; i<n; i++){  
//     for(let j=0; j<n; j++){
//         for(let k=0; k<n; k++){
//             count++;  
//         }
//     }
// }
// console.log(count); // 125 times
//  n^3

// So, Loops are increase time complexity.



let n=5, count=0;
for(let i=0; i<100*n; i++){
    count++;  
}
console.log(count); // 500 times but here time complexity is 5. Time complexity always depends on user-input/n/loop 
