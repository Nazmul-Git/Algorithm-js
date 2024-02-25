
// Star square

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

let star='';
let n=5;
for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(i===1 || i===n){
            star+='*';
        }
        else if(j===1 || j===n){
            star+='*';
        }
        else{
            star+=' ';
        }
        
    }
    console.log(star);
    star='';
} 