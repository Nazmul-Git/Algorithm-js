
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
let triangle='';
let n=5;
for(let i=n; i>=1; i--){
    for(let j=1; j<=i; j++){
        triangle+='*';
    }
    console.log(triangle);
    triangle='';
}
