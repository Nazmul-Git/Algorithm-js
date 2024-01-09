const findCeiling = (arr2, key) => {
    let l = 0;
    let r = arr2.length - 1;
    let m;
  
    while (r >= l) {
      m = l + Math.floor((r - l) / 2);
      if (arr2[m] === key) {
        return arr2[m];
      }
      if (arr2[m] > key) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    return `Here ${key}'s Ceiling = ${arr2[m + 1]} & Floor = ${arr2[m - 1]}`;
  };
  const arr2 = [5, 7, 10, 13, 17, 22, 25, 30, 31, 39];
  
  const ceil = findCeiling(arr2, 28);
  console.log(ceil);

  /**
   * arr2.length --> O(n)
   * key --> O(1)
   * l --> O(1)
   * r --> O(1)
   * m --> O(1)
   * return --> O(1)
   

     O(n) + O(1) + O(1) + O(1) + O(1) + O(1)
   = O(n) + 5 * O(1)
   = O(n) + O(1)      //Avoid constant
   = O(n)            //O(n) > O(1) 

   */