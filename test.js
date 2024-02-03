// const removeSpace=(s)=>{
//     return 
// }

var validPalindrome = function(s) {
    let str=s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let l=0, r=str.length-1;
    while(l<r){
        if(str[l] !== str[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
};
console.log(validPalindrome('abb a'));

