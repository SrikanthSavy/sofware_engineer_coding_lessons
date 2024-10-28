/*
1910. Remove All Occurrences of a Substring
Medium https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/
Hint
Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:
    Find the leftmost occurrence of the substring part and remove it from s.
Return s after removing all occurrences of part.
A substring is a contiguous sequence of characters in a string.
Example 1:
    Input: s = "daabcbaabcbc", part = "abc"
    Output: "dab"
    Explanation: The following operations are done:
    - s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
    - s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
    - s = "dababc", remove "abc" starting at index 3, so s = "dab".
    Now s has no occurrences of "abc".

Example 2:
    Input: s = "axxxxyyyyb", part = "xy"
    Output: "ab"
    Explanation: The following operations are done:
    - s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
    - s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
    - s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
    - s = "axyb", remove "xy" starting at index 1 so s = "ab".
    Now s has no occurrences of "xy".

Constraints:
    1 <= s.length <= 1000
    1 <= part.length <= 1000
    s​​​​​​ and part consists of lowercase English letters.
*/

const s = "xxxxxyyyyy";
const part = "xy";

const str = "daabcbaabcbc";
const key = "abc";
// let start = str.indexOf(key);
// console.log("Index: " + start);

// const result = str.replace(key, "");
// console.log("result:", result);

var removeOccurrences = function (s, key) {
  while (s.length > 0 && s.indexOf(key) !== -1) {
    //console.log("s.indexOf(key) :" + s.indexOf(key));
    s = s.replace(key, "");
  }

  return s;
};

//Time Complexity = O(n)

console.log("String left: " + removeOccurrences(str, key));
console.log("xy removed String left: " + removeOccurrences(s, part));
