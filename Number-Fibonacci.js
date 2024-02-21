const fibonacci=(n)=>{
    let n1=0, n2=1, next;
    for(let i=0; i<n; i++){
        next=n1+n2;
        n1=n2;
        n2=next;
    }
    return n2;
}
// console.log(fibonacci(index))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
console.log(fibonacci(8))