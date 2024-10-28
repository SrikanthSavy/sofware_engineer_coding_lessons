var checkInclusion = function (s1, s2) {
  const freqOfCharS1 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    freqOfCharS1[s1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  const windowSize = s1.length;
  //sliding window
  for (let i = 0; i < s2.length; i++) {
    let currIndex = i;
    let windowIndex = 0;
    const freqOfWindow = new Array(26).fill(0);
    while (windowIndex < windowSize && currIndex < s2.length) {
      freqOfWindow[s2[currIndex].charCodeAt(0) - "a".charCodeAt(0)]++;
      currIndex++;
      windowIndex++;
    }

    //Need to check both freqWindChar === freOf Char in a separate function
    if (isSameFreq(freqOfCharS1, freqOfWindow)) return true;
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

const s1 = "ab";
const s2 = "eidboaoo";

console.log("Output: ", checkInclusion(s1, s2));
