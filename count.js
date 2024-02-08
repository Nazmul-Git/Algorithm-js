const counter=(val)=>{
    let count =0;
    for(let i=1; i<=100; i++){
        let str=i+'';
        const arr= str.split('');
        arr.forEach(v=>{
            if(v===val+''){
                count++;
            }
        })
        
    }
    return count;
}
console.log(counter(1));