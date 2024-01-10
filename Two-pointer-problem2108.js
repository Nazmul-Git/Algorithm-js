/**
 Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

 

Example 1:

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.
Example 2:

Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".
Example 3:

Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
 */

/////////////////////////////////////////////////////////////////
// function isPalindrome(word) {
//     return word === word.split('').reverse().join('');
//   }

const isPalindrome = (word) => {
    for (let i = 0, j = word.length - 1; i <= j; i++, j--) {
      if (word[i] !== word[j]) {
        return '';
      }
    }
    return word;
  };
  var findFirstPalindromicString = function (str) {
    for (let word of str) {
      if (isPalindrome(word)) return word;
    }
    return "";
  };
  
  // Example usage:
  const words = ["abc", "car", "ada", "racecar", "cool"];
  const result = findFirstPalindromicString(words);
  console.log(result);