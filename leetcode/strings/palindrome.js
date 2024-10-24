/*
125. Valid Palindrome    Easy https://leetcode.com/problems/valid-palindrome/description/
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
            Input: s = "A man, a plan, a canal: Panama"
            Output: true
            Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
            Input: s = "race a car"
            Output: false
            Explanation: "raceacar" is not a palindrome.

Example 3:
            Input: s = " "
            Output: true
            Explanation: s is an empty string "" after removing non-alphanumeric characters.
            Since an empty string reads the same forward and backward, it is a palindrome.
Constraints:
    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.
*/

var isPalindrome = function (str) {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (!isAlphaNumberic(str[start])) {
      start++;
      continue;
    }
    if (!isAlphaNumberic(str[end])) {
      end--;
      continue;
    }

    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

//Method to check if the given char is in the range of 0-9 , a-z, A-Z
//Note: As we are converting it to Lowercase, we compare only lowe case
var isAlphaNumberic = (alpha) => {
  if (
    !(alpha >= "0" && alpha <= "9") && // numeric (0-9)
    !(alpha.toLowerCase() >= "a" && alpha.toLowerCase() <= "z") // upper alpha (a-z)
  ) {
    return false;
  }
  return true;
};

let str = "A man, a plan,a a canal: Panama";
console.log("Is PAlindrome :" + isPalindrome(str));
