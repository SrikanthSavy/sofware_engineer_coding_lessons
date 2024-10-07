/*
        540. Single Element in a Sorted Array : https://leetcode.com/problems/single-element-in-a-sorted-array/description/
        You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

        Return the single element that appears only once.
        Your solution must run in O(log n) time and O(1) space.

        Example 1:
                    Input: nums = [1,1,2,3,3,4,4,8,8]
                    Output: 2

        Example 2:
                    Input: nums = [3,3,7,7,10,11,11]
                    Output: 10
        Constraints:
                1 <= nums.length <= 105
                0 <= nums[i] <= 105
*/

const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
const nums1 = [3, 3, 7, 7, 10, 11, 11];
const nums2 = [1, 1, 2];

var singleNonDuplicate = function (nums) {
  let n = nums.length;
  //When only single element is there in given array
  if (n === 1) return nums[0];

  let start = 0;
  let end = n - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    //corner cases
    //case1: When 1st value == mid , then mid-1 -> will not exist
    if (mid === 0 && nums[mid] !== nums[1]) return nums[mid];
    //case2: When Lastelement value == mid , then mid-1 -> will not exist
    if (mid === n - 1 && nums[mid] !== nums[n - 2]) return nums[mid];

    //if mid - is the non duplicate number
    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1])
      return nums[mid];

    //mid%2==0 => even elements on bothsides
    if (mid % 2 === 0) {
      //even elements e.s
      if (nums[mid] === nums[mid - 1]) {
        // ans should be on left side elements
        end = mid - 1;
      } else {
        // ANs should be on the rightside
        start = mid + 1;
      }
    } else {
      //Odd elements

      if (nums[mid] === nums[mid - 1]) {
        // ans should be on right  side elements
        start = mid + 1;
      } else {
        // ANs should be on the leftside side ,(odd)
        end = mid - 1;
      }
    }
  }
};
//console.log(singleNonDuplicate(nums));
//console.log(singleNonDuplicate(nums1));
console.log(singleNonDuplicate(nums2));
