const power=(n,p)=>{
    if(p===1) return n;
    // 2^5 = 2*2*2*2*2
    return n*power(n, p-1);
}
console.log(power(2,5));