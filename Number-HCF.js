const HCF=(a,b)=>{
    let arr=[];
    for(let i=1; i<=20; i++){
        if(a%i===0 && b%i===0){
            arr.push(i);
        }
    }
    return arr.pop();
}
console.log(HCF(20,50));