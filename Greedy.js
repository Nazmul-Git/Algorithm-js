
let arr=[1,2,5,10,20,50,100];
let num=55;
let count=0;
let pathForNum=[];
for(let i=arr.length-1; i>=0; i--){
    while(arr[i]<=num){
        if(num<=0) break;
        count++;
        pathForNum.push(arr[i]);
        num=num-arr[i];
    }
}
console.log(count);
console.log(pathForNum);