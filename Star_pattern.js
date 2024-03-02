// Star square  O(n^3)

// let str='';
// for(let i=0; i<=5;i++){
//     for(let j=0; j<=5; j++){
//         str+='*';
//     }
//     console.log(str);
//     str='';
// }

//////////////////////////////////////////////////

// Star Square Border

// let star='';
// let n=5;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         if(i===1 || i===n || j===1 || j===n){
//             star+='*';
//         }
//         else{
//             star+=' ';
//         }

//     }
//     console.log(star);
//     star='';
// }

//////////////// Cross X pattern  /////////////////
// let cross='';
// let n=5;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         if(i==j || i+j===n+1){
//             cross+='*';
//         }
//         else{
//             cross+=' ';
//         }
//     }
//     console.log(cross);
//     cross='';
// }

//////////////// Triangle  /////////////
// let triangle='';
// let n=5;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         triangle+='*';
//     }
//     console.log(triangle);
//     triangle='';
// }

////////////////////////
// let triangle='';
// let n=5;
// for(let i=n; i>=1; i--){
//     for(let j=1; j<=i; j++){
//         triangle+='*';
//     }
//     console.log(triangle);
//     triangle='';
// }

///////////// rotate ////////////////
// let triangle='';
// let n=5;
// for(let i=n; i>=1; i--){
//     for(let s=1; s<i; s++){
//         triangle+=' ';
//     }
//     for(let j=1; j<=n-i+1; j++){
//         triangle+='*'
//     }
//     console.log(triangle);
//     triangle='';
// }

///////////////////////////
// let triangle='';
// let n2=5;
// for(let i=n2; i>=1; i--){
//     for(let s=1; s<i; s++){
//         triangle+=' ';
//     }
//     for(let j=1; j<=n2-i+1; j++){
//         triangle+='*'
//     }
//     console.log(triangle);
//     triangle='';
// }

/////////////////////////
// let triangle='';
// let n1=5;
// for(let i=1; i<=n1; i++){
//     for(let s=1; s<i; s++){
//         triangle+=' '
//     }
//     for(let j=1; j<=n1-i+1; j++){
//         triangle+='*'
//     }

//     console.log(triangle);
//     triangle='';
// }

///////////////diamond////////////////
// let diamond = "";
// let n = 5;
// for (let i = n; i >= 1; i--) {
//   for (let s = 1; s < i; s++) {
//     diamond += " ";
//   }
//   for (let j = 1; j <= n - i + 1; j++) {
//     diamond += "*";
//   }
//   for (let k = 2; k <= n - i + 1; k++) {
//     diamond += "*";
//   }
  

//   console.log(diamond);
//   diamond = "";
// }
// for(let i=2; i<=n; i++){
//     for(let s=1; s<i; s++){
//         diamond+=' '
//     }
//     for(let j=1; j<=n-i+1; j++){
//         diamond+='*'
//     }
//     for (let k = 2; k <= n - i + 1; k++) {
//         diamond += "*";
//       }
//     console.log(diamond);
//     diamond='';
// }


/////////////// Diamond Easy Way ///////////////////
let diamond = "";
let n = 5;

for(let i=1; i<=n; i++){
    for(let s=1; s<=n-i; s++){
        diamond+=' ';
    }
    for(let s=1; s<=i; s++){
        diamond+='$'
    }
    for(let s=1; s<i; s++){
        diamond+='@'
    }
    console.log(diamond);
    diamond='';
}


for(let i=1; i<=n-1; i++){
    for(let s=1; s<=i; s++){
        diamond+=' ';
    }
    for(let s=1; s<=n-i; s++){
        diamond+='$'
    }
    for(let s=1; s<=n-i-1; s++){
        diamond+='@'
    }
    console.log(diamond);
    diamond='';
}