/*
    238. Product of Array Except Self

    Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
    You must write an algorithm that runs in O(n) time and without using the division operation.
    Example 1:
                Input: nums = [1,2,3,4]
                Output: [24,12,8,6]
    Example 2:
        Input: nums = [-1,1,0,-3,3]
        Output: [0,0,9,0,0]

    Constraints:
    =============
    2 <= nums.length <= 105
    -30 <= nums[i] <= 30
    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

const nums = [1, 2, 3, 4];

//Optimized solition Time COmplexity =O(n) & Aux Space O(1)
var productExceptSelf = function (nums) {
  let n = nums.length;
  const ans = new Array(n).fill(1);

  //Calculate prefix - left side product  from 1 to n i.e starting from second position
  for (let i = 1; i < n; i++) {
    ans[i] = ans[i - 1] * nums[i - 1];
    // prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  let sufix = 1;
  //Calculate Sufix - Right side product  from (n-2) to 0 i.e starting from second last position to begining (Reverse)
  for (let i = n - 2; i >= 0; i--) {
    sufix = sufix * nums[i + 1];
    ans[i] = ans[i] * sufix;
    //sufix[i] = sufix[i + 1] * nums[i + 1];
  }
  return ans;
};

//Little efficent way : usung prefix-array & Sufix array calculation
var productExceptSelf_order_n = function (nums) {
  let n = nums.length;
  const ans = [];
  const prefix = new Array(n).fill(1);
  const sufix = new Array(n).fill(1);

  //Calculate prefix - left side product  from 1 to n i.e starting from second position
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  //Calculate Sufix - Right side product  from (n-2) to 0 i.e starting from second last position to begining (Reverse)
  for (let i = n - 2; i >= 0; i--) {
    sufix[i] = sufix[i + 1] * nums[i + 1];
  }

  //Calculate the ans[i]=p[i]*s[i]
  for (let i = 0; i < n; i++) {
    ans[i] = prefix[i] * sufix[i];
  }
  return ans;
};

//Bruteforce
var productExceptSelfBrute = function (nums) {
  const ans = [];
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let mulVal = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) mulVal *= nums[j];
    }
    ans[i] = mulVal;
  }
  return ans;
};

console.log(productExceptSelf(nums));
