/*
    11. Container With Most Water
        You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
        Find two lines that together with the x-axis form a container, such that the container contains the most water.
        Return the maximum amount of water a container can store.
        Notice that you may not slant the container.

        Constraints:
                    n == height.length
                    2 <= n <= 105
                    0 <= height[i] <= 104

        Example :   Input: height = [1,8,6,2,5,4,8,3,7]
                    Output: 49
        Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

*/
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

//Efficent way ( own) using 2-Pointer approach

var maxArea = (height) => {
  let n = height.length;
  let left = 0,
    right = n - 1;
  let maxVol = 0;
  while (left < right) {
    let length = right - left;
    let breadth = Math.min(height[left], height[right]);
    maxVol = Math.max(maxVol, length * breadth);

    // if (height[left] < height[right]) {
    //   left++;
    // } else {
    //   right--;
    // }
    height[left] < height[right] ? left++ : right--;
  }
  return maxVol;
};

console.log(`MAx Water: ${maxArea(height)}`);

//Brute Force Logic: we consider all container and check the max value
//TIme Complexity : O(n^2) Auxilary Space = O(1)
/*
    TIme COmplexity : O(n^2) , Will not get submitted as constrain is n<=10^5 
   with O(n^2) i.e (10^5)^2  == 10^10 > 10^8
   There our code wont get submitted
*/

var volume = (a, b) => a * b;

var maxAreaBrute = function (height) {
  const n = height.length;

  let maxVolume = 0;
  for (let i = 0; i < n; i++) {
    // left pillar
    for (let j = i + 1; j < n; j++) {
      // right pillar
      let length = Math.min(height[i], height[j]);
      let breadth = j - i; // (j-i) will be breadth i.e width  , as j=i+1 , it will never be negative
      let currentVolume = volume(length, breadth);
      maxVolume = Math.max(maxVolume, currentVolume);
    }
  }
  return maxVolume;
};

console.log(`mav Water: ${maxAreaBrute(height)}`);
