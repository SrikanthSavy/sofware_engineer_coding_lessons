/*
75. Sort Colors Medium : https://leetcode.com/problems/sort-colors/description/

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, 
with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
Note: You must solve this problem without using the library's sort function.

Constraints:
    n == nums.length
    1 <= n <= 300
    nums[i] is either 0, 1, or 2.
Follow up: Could you come up with a one-pass algorithm using only constant extra space?

EX: Input: nums = [2,0,2,1,1,0]
    Output: [0,0,1,1,2,2]
EX: Input: nums = [2,0,1]
    Output: [0,1,2]

Hint: We Use DNF-Sorting Algorithm ( Detch National Flag- Sorting Algorithm)

*/

//DNF-Sorting Algorithm
//Logic: We "Vision our given array into 3 Sorted Parts & 1 unsorted Part"
//       0- part , 1's part , 2's part
/*
    We take 3 pointer .  low, mid, high

    0   0   0       1  1  1         [2,  0,  2,  1,  1,  0]       2  2      2  
    |       |       |      |         |                   |       |          |
    0       low-1  low      mid-1    mid................high     high+1     n-1

Loop through (mid<=high)
if(nums[mid]===0) => swap(n(low),n(mid))  && low++ , mid++
if(nums[mid]===1) => mid++
if(nums[mid]===2) => swap(n(mid),n(high)) && high--

*/
const nums = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      //swap
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
};

console.log(sortColors(nums)); // TIme Complexity = O(n) in Single Pass

//Brute Force Logic  : 1 forloop to count one's,two's & thress's   2) use while loop for each count and override array
var sortColorsbrute = function (nums) {
  let count0 = 0,
    count1 = 0,
    count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count0++;
    else if (nums[i] === 1) count1++;
    else count2++;
  }

  let i = -1;
  while (count0 > 0) {
    nums[++i] = 0;
    count0--;
  }

  while (count1 > 0) {
    nums[++i] = 1;
    count1--;
  }

  while (count2 > 0) {
    nums[++i] = 2;
    count2--;
  }

  return nums;
}; //Time Complexity : O(n) +O(n) ==> O(n)

//console.log(sortColorsbrute(nums));

//With  Inbuild function sort
var sortColorsInbuild = function (nums) {
  return nums.sort((a, b) => a - b);
};
//console.log(sortColorsInbuild(nums));
