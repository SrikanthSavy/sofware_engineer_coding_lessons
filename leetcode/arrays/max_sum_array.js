/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //Using Dynamic Programming
  //Kadane's Algorithm

  let maxSum = Number.NEGATIVE_INFINITY;
  console.log(`minimum value : ${Math.max(maxSum, -1)}`);
  let currentSum = 0;
  for (let i of nums) {
    currentSum += i;
    maxSum = Math.max(maxSum, currentSum);

    // Condition where if we get -ve value , then reset CurrentSum=0 and start again
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
};

const array = [-1];

console.log(maxSubArray(array));
