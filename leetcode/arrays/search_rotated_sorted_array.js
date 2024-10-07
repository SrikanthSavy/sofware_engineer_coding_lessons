/*  33: search-in-rotated-sorted-array   : https://leetcode.com/problems/search-in-rotated-sorted-array/description/

    There is an integer array nums sorted in ascending order (with distinct values).
    Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
    such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
    For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
    Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
    You must write an algorithm with O(log n) runtime complexity.

    Example 1:
            Input: nums = [4,5,6,7,0,1,2], target = 0
            Output: 4

    Example 2:
            Input: nums = [4,5,6,7,0,1,2], target = 3
            Output: -1
    Example 3:
        Input: nums = [1], target = 0
        Output: -1
    Constraints:

                1 <= nums.length <= 5000
                -104 <= nums[i] <= 104
                All values of nums are unique.
                nums is an ascending array that is possibly rotated.
                -104 <= target <= 104
*/

/* Hint: We use BST - modfiied 1)Find Mid , then decide which side to search
    Note: There will always be one side sorted on either side of (pivot)
*/
const nums = [4, 5, 6, 7, 0, 1, 2];
const nums1 = [8, 9, 0, 1, 2, 3, 4, 5, 6, 7];
var search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (target === nums[mid]) return mid;

    // Find left side is sorted or Rightsie & Then apply BS on that
    if (nums[start] < nums[mid]) {
      //Left side is sorted
      //Applying BS on left sife
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      //Right side is Sorted
      //Applying BS on Right Side
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  } //End of WHile loop
  return -1;
};

console.log(search(nums, 0));
console.log(search(nums1, 0));
