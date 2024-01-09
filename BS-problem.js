let arr=[1,2,3,4,5,7,3,2,1]
for(let i=0, j=arr.length-1; i<=j; i++,j--){
    if(arr[i]===arr[j]) console.log('palindrome')
    else console.log('not palindrome')
}

//  Number is palindrome or not
const palindrome=(x)=>{
    return x==x.toString().split('').reverse().join('');
}
console.log(palindrome(121))