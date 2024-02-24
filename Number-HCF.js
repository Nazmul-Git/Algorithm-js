const HCF=(a,b)=>{
    let result;
    let minNum= a>b ? b : a;
    for(let i=1; i<=minNum; i++){
        if(a%i===0 && b%i===0){
            result=i;
        }
    }
    return result;
}
console.log(HCF(50,20));