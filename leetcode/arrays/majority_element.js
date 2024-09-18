/*

Leetcode == 169. Majority Element

Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

const a = [2, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3];
const a1 = [2, 2, 1, 1, 1, 2, 2];

//********* Moore's Voting Algorithm ***************
/*
    Logic: Start with first element let freq =1 and let ans=a[0] 
    If the next number is same increasr freq
    else   ans = a[that index]

    finally youll be left with ans == Majority Element
*/
//Time Complexity  = O(n)

function mooresVotingMajorityElement(a) {
  const n = a.length;
  let freq = 0;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (freq === 0) ans = a[i];

    if (ans === a[i]) freq++;
    else freq--;
  }
  return ans;
}

console.log("Moore Voting Algorithem:" + mooresVotingMajorityElement(a1));

//Time COmplexity = O(n2)
function bruteMajorityElement(a) {
  for (let i = 0; i < a.length; i++) {
    let freq = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j]) freq++;
    }
    if (freq > Math.floor(a.length / 2)) return a[i];
  }
  return 0;
}
console.log(bruteMajorityElement(a));

// Little Better Approach : 1) Sort the elements in ASC
//2) cal freq , in a forloop and if value changes , then reset freq =1 and move forward
//3) Time Complexity O(nlog) + n = O(nlogn)

/*
    Numeric Sort
                By default, the sort() function sorts values as strings.This works well for strings ("Apple" comes before "Banana").
                If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
                Because of this, the sort() method will produce incorrect result when sorting numbers.
                You can fix this by providing a compare function:
*/

function sortedMajorityElement(a) {
  const n = a.length;
  a.sort((x, y) => {
    return x - y;
  });

  let freq = 1;
  for (let i = 1; i < n; i++) {
    if (a[i] === a[i - 1]) freq++;
    else freq = 1;

    if (freq > Math.floor(n / 2)) return a[i];
  }
  return 0;
}

console.log(sortedMajorityElement(a));
console.log(sortedMajorityElement(a1));
