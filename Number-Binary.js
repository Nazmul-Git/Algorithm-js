const convertBinary=(num)=>{
    let arr=[];
    result=num;
    while(1){
        arr.push(result%2)
        if(result%2===0){
            result=result/2;
        }else{
            result=Math.floor(result/2);
        }
        if(result===0) break;
    }
    return arr.reverse().join('');
}
console.log(convertBinary(125))