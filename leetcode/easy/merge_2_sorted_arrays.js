/*
    88. Merge Sorted Array
    You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
    representing the number of elements in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.
    The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
    To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
    and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

    Example 1:
                Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
                Output: [1,2,2,3,5,6]
                Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
                The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
    Example 2:
                Input: nums1 = [1], m = 1, nums2 = [], n = 0
                Output: [1]
                Explanation: The arrays we are merging are [1] and [].
                The result of the merge is [1].
    Example 3:
                Input: nums1 = [0], m = 0, nums2 = [1], n = 1
                Output: [1]
                Explanation: The arrays we are merging are [] and [1].
                The result of the merge is [1].
                Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
    Constraints:
                nums1.length == m + n
                nums2.length == n
                0 <= m, n <= 200
                1 <= m + n <= 200
                -109 <= nums1[i], nums2[j] <= 109
    
                Follow up: Can you come up with an algorithm that runs in O(m + n) time?
*/

/*
    Logic is : Fill the 0's in nums1 , in reverse Order, ie. 
    Max(num1,num2) will go at index= (m+n)-1
    SO we take 3 pointers
    index =  (m+n)-1
    i = m-1 last index of non-0 element in nums1
    j= n-1  last index in nums2 array

    Now we compare Greattest no from nums2 ( last index) , as it is sorted array
    with Greatest element from Nums1 array
    And map it to nums1[index] = max(n[i],n[j])
    then we decrement index--
    and based on which one is Max , we decrement i-- or j--

    While lopp thorugh till (j<0) i.e. we travesered all elements in nums2 Array


*/

const merge = function (A, m, B, n) {
  let index = m + n - 1; // Last index  total nums1 = m+n -1
  let i = m - 1; // last index of nums1 (without zeros)
  let j = n - 1; //Last Index od num2

  while (i >= 0 && j >= 0) {
    if (A[i] <= B[j]) {
      A[index] = B[j];
      j--;
      index--;
    } else {
      A[index] = A[i];
      i--;
      index--;
    }
  }

  while (j >= 0) {
    A[index] = B[j];
    j--;
    index--;
  }

  console.log("Merge Result : " + A);
};

const nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
const nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);

const A1 = [0];
let a1 = 0;
const B1 = [10];
let b1 = 1;
merge(A1, a1, B1, b1);
