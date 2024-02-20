const isPrime=(num)=>{
    let n=105;
    let array= new Array(n).fill(true);

    array[0]=array[1]=false;
    for(let i=2; i<=array.length; i++){
        if(array[i]){
            for(let j=i; j<=array.length; j+=i){
                if(j !== i){
                    array[j]=false;
                }
            }
        }
    }
    for(let i=2; i<=array.length; i++){
        if(array[num]===true) return 'Prime';
        else return 'Not Prime'
    }
    
}
console.log(isPrime(9));