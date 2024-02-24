const binaryToDecimal = (binary) => {
  let text = binary + "";
  let arr = text.split("");
  let sum=0;
  let pow=arr.length-1;
//   console.log(arr,pow);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") {
      arr[i] = parseInt(arr[i]) * Math.pow(2, pow);
    }
    pow--;
  }
  for(let j=0; j<arr.length; j++){
    sum=sum+parseInt(arr[j]);
  }
  return sum;
};
console.log(binaryToDecimal(1111101));
