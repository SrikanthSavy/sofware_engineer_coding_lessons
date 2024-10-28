/*
    567. Permutation in String  = Medium
Given two strings s1 and s2, return true if s2 contains a
permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
    Input: s1 = "ab", s2 = "eidbaooo"
    Output: true
    Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
            Input: s1 = "ab", s2 = "eidboaoo"
            Output: false

Constraints:
    1 <= s1.length, s2.length <= 104
    s1 and s2 consist of lowercase English letters.
*/
const s1 = "ab";
const s2 = "eidboaoo";

const checkInclusion = (s1, s2) => {
  const freqOfChar = new Array(26).fill(0);
  //Step1 => store freq of s1-char
  for (let i = 0; i < s1.length; i++) {
    freqOfChar[s1[i].charCodeAt(0) - "a".charCodeAt(0)]++; // short cut
  }

  // Whats the size of Window
  let windowSize = s1.length;

  //Step 2: Sliding Window Search ( windowSize = s1.length)
  for (let i = 0; i < s2.length; i++) {
    let winIndex = 0; // every window in our case 2length , we conside first index inside window ==0
    let currIndex = i;
    const freqOfWindowChar = new Array(26).fill(0); // we store each eindow char feq and compare it with main one.
    //check condition : windowIndex should never cross windowsize i.e. 2
    while (winIndex < windowSize && currIndex < s2.length) {
      freqOfWindowChar[s2[currIndex].charCodeAt(0) - "a".charCodeAt(0)]++;
      currIndex++;
      winIndex++;
    }

    //Need to check both freqWindChar === freOf Char in a separate function
    if (isSameFreq(freqOfChar, freqOfWindowChar)) return true;
  }

  return false;
};

//Frequen char comparision
const isSameFreq = (freq1, freq2) => {
  for (let i = 0; i < 26; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }
  return true;
};

console.log("Permuation of S1 in S2 is : ", checkInclusion(s1, s2));

/*
Time Complexity
O((M+N)∗26)O((M+N)∗26)
*/
