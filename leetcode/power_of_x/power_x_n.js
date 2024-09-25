/*
    Leetcode:https://leetcode.com/problems/powx-n/description/
    50. Pow(x, n)

    Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

            Example 1:

            Input: x = 2.00000, n = 10
            Output: 1024.00000
            Example 2:

            Input: x = 2.10000, n = 3
            Output: 9.26100
            Example 3:

            Input: x = 2.00000, n = -2
            Output: 0.25000
            Explanation: 2-2 = 1/22 = 1/4 = 0.25
            

            Constraints:

            -100.0 < x < 100.0
            -231 <= n <= 231-1
            n is an integer.
            Either x is not zero or n > 0.
            -104 <= xn <= 104
*/
//Binary Exponentiation logic

var myPow = (x, n) => {
  let ans = 1.0;
  let binaryForm = Math.abs(n).toString(2);
  console.log("Binary :", binaryForm);
  //Handling corner cases
  if (n === 0) return 1.0;
  if (x === 0) return 0;
  if (x === 1) return 1.0;
  //If x=-1 and power is even i.e -1^2 ==1  && -1^3 =-1
  if (x < 0 && n % 2 === 0) return 1;
  if (x < 0 && n % 2 !== 0) return -1;

  // x is negative => 1/x^n
  if (binaryForm < 0) {
    x = 1 / x;
  }

  for (let i = binaryForm.length - 1; i >= 0; i--) {
    if (binaryForm[i] === "1") {
      ans *= x;
    }
    //if (i > 0) {
    // Avoid unnecessary multiplication in the last iteration
    x *= x;
    //}
  }
  return ans;
}; //Time complexity = O(logn)

console.log(myPow(2, 7));
//console.log(myPow(2, -5));

//Brute Force
var myPowBrute = (x, n) => {
  let total = 1;
  for (let i = 0; i < n; i++) total = total * x;

  return total;
};

// console.log(myPowBrute(2, 5));
// console.log(myPowBrute(2, -5));

//
