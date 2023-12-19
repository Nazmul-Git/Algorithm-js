const arr=[2,3,4,6,9,12,16,20,25,30,40,80,81,99,100];
const key= 9;
for(let i=0; i<arr.length; i++){
    if(arr[i] === key){
        console.log(`Key=${key} found at index ${i}`)
    }
}