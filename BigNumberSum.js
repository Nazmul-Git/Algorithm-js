//  big num sum

let big1=[5,3,9,4,6,7,8,2,1,5,9,3,7];
let big2=[5,3,9,4,8,7,8,2,5,5,9,3,1];
let result=[];
let sum=0;
let isHand=0;
let reminder=0;
for(let i=big1.length>=big2.length?big1.length-1:big2.length-1; i>=0; i--){
    sum=isHand+big1[i]+big2[i];
    if(sum>9){
        reminder=sum%10;
        isHand=1;
    }else{
        reminder=sum;
        isHand=0;
    }
    result.unshift(reminder);
}
console.log(result);