/*  Aggressive Cows Problem
==========================
    Link: https://www.spoj.com/problems/AGGRCOW/
    
    Assign C cows to N stalls such that min distance between them is largest possible.
    Return largest minimum distance.
    N= 5   arr = [1, 2, 8, 4, 9]   C = 3
*/
const arr = [1, 2, 8, 4, 9]; // Positions in the stall
let N = 5; //Stalls
let C = 3; //Cows

const aggressiveCows = (arr, N, C) => {
  //lets sort the arr
  arr.sort((a, b) => a - b);

  let start = arr[0];
  let end = arr[N - 1] - start;
  let ans = -1;

  //Applying Binary Search
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (isPossibleAns(arr, N, C, mid)) {
      //Search Left
      ans = mid;
      start = mid + 1; // since we are searching max value
    } else {
      end = mid - 1;
    }
  }
  return ans;
};

const isPossibleAns = (arr, N, C, maxAllowedDistance) => {
  let cow = 1;
  let lastCowStallpos = arr[0];

  for (i = 1; i < N; i++) {
    if (arr[i] - lastCowStallpos >= maxAllowedDistance) {
      cow++;
      lastCowStallpos = arr[i];
    }

    if (cow === C) return true;
  }

  return false;
};

console.log(
  "Largest Min distance to arrange cows :",
  aggressiveCows(arr, N, C)
);
