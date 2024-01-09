
const isPalindrome=(arr)=>{
for(let i=0, j=arr.length-1; i<=j; i++,j--){
    if(arr[i]===arr[j]){
        i++;
        j--;
    }
    else return 'not palindrome';
}
return 'is palindrome';
};
console.log(isPalindrome([1,2,3,4,5,7,3,2,1]))



///////////////////////////////////////////////////////////////


//  Number is palindrome or not
const palindrome=(x)=>{
    return x==x.toString().split('').reverse().join('');
}
console.log(palindrome(121))