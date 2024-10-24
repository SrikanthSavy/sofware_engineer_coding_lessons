/*
    https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
    852. Peak Index in a Mountain Array

    You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.
        Return the index of the peak element.
        Your task is to solve it in O(log(n)) time complexity.

        Example 1:
                Input: arr = [0,1,0]            Output: 1
        Example 2:
                Input: arr = [0,2,1,0]         Output: 1
        Example 3:
                Input: arr = [0,10,5,20,4]        Output: 4
        
        Constraints:
            3 <= arr.length <= 105
            0 <= arr[i] <= 106
            arr is guaranteed to be a mountain array.
*/
const arr1 = [0, 4, 10, 5, 2];
const arr2 = [0, 2, 1, 0];
const arr3 = [0, 1, 0];

var peakIndexInMountainArray = function (arr) {
  let start = 1;
  let end = arr.length - 2;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    //If mid is the peak number
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) return mid;
    // Need to decide either leftside search or Right side
    if (arr[mid] < arr[mid + 1]) start = mid + 1;
    else end = med - 1;
  }

  return -1;
};

console.log(peakIndexInMountainArray(arr1));
console.log(peakIndexInMountainArray(arr2));
console.log(peakIndexInMountainArray(arr3));
