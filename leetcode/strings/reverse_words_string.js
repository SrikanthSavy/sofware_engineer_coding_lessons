/*
        151. Reverse Words in a String
    Given an input string s, reverse the order of the words.
    A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
    Return a string of the words in reverse order concatenated by a single space.
    Note that s may contain leading or trailing spaces or multiple spaces between two words. 
    The returned string should only have a single space separating the words. Do not include any extra spaces.

    Example 1:
                Input: s = "the sky is blue"
                Output: "blue is sky the"
    Example 2:
                Input: s = "  hello world  "
                Output: "world hello"
                Explanation: Your reversed string should not contain leading or trailing spaces.
    Example 3:
                Input: s = "a good   example"
                Output: "example good a"
                Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
    Constraints:
        1 <= s.length <= 104
        s contains English letters (upper-case and lower-case), digits, and spaces ' '.
        There is at least one word in s.
*/
let s = "the sky is blue";

var reverseWords = function (s) {
  let ans = "";
  let n = s.length;
  s = s.split("").reverse().join("");

  for (let i = 0; i < n; i++) {
    let word = "";

    //got indiviual word from the reverse string
    while (i < n && s[i] !== " ") {
      word += s[i];
      i++;
    }
    //reverse that word
    word = word.split("").reverse().join("");

    if (word.length > 0) ans += " " + word;
  }

  //Note return ans , with first space
  return ans.substring(1);
};

console.log("Revese of word =", reverseWords(s));
