const HCF=(a,b)=>{
    let arr=[];
    let minNum= a>b ? b : a;
    for(let i=1; i<=minNum; i++){
        if(a%i===0 && b%i===0){
            arr.push(i);
        }
    }
    return arr.pop();
}
console.log(HCF(4,6));