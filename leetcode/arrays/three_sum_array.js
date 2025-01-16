/*
            Determine sum of three integers
The goal of this exercise is to determine if the sum of three integers is equal to the given value.
Problem statement: Given an array of integers and a value, determine if there are any three integers in the array whose sum equals the given value.
    Consider this array and the target sums.
            array = [3, 7, 1, 2, 8, 4, 5]
            k =20

Solution:
   Step 1: Sort the array . In this solution, we sort the array. 
   Then, fix one element e and find a pair (a, b) in the remaining array so that (required_sum - e) ==  a + b.
Start with first element e in the array and try to find such a pair (a, b) in the remaining array (i.e A[i + 1] to A[n - 1]) that satisfies the condition: a+b = required_sum - e.
 If we find the pair, we have found the solution: a, b and e. Now we can stop the iteration.
Otherwise, we repeat the above steps for all elements e at index i = 1 to n - 3 until we find a pair that meets the condition.

Runtime Complexity: Quadratic, O(n2)
Memory Complexity: Constant, O(1)


Problem URl : https://www.educative.io/blog/apple-coding-interview-questions
*/

const array = [3, 7, 1, 2, 8, 4, 5];
const array2 = [3, 7, 1, 2, 8, 4, 5, 6, 10];
const target = 20;

console.log(findTriplets(array, target));
console.log(findTriplets(array2, target));

function findTriplets(arr, target) {
  //Sort the array for easier processing
  arr.sort((a, b) => a - b);
  //To store result we take an empty array
  const result = [];

  //Fix the first element  "e" and use the 2 pointer method
  for (let i = 0; i < arr.length - 2; i++) {
    //skip for duplicates for first element
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let leftPointer = i + 1; //Second element
    let rightPointer = arr.length - 1; // the last element in the array

    //Logic here
    while (leftPointer < rightPointer) {
      //calculate the sum of these 3 values
      const currSum = arr[i] + arr[leftPointer] + arr[rightPointer];

      if (currSum === target) {
        //found the triplet
        result.push(arr[i], arr[leftPointer], arr[rightPointer]);

        //skip duplicates for second element i.e. a[leftPointer] === a[leftPointer+1]
        while (
          leftPointer < rightPointer &&
          arr[leftPointer] === arr[leftPointer + 1]
        )
          leftPointer++;
        //skip duplicates for last element i.e. a[rightPointer] === a[rightPointer-1]
        while (
          leftPointer < rightPointer &&
          arr[rightPointer] === arr[rightPointer - 1]
        )
          rightPointer--;

        //If no duplicates we move to right of leftPointer i.e. ++
        //& move left of rightPointer--
        leftPointer++;
        rightPointer--;
      } else if (currSum < target) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }

  return result;
}

/*

Initial state: i = 0
[1, 2, 2, 3, 4, 4, 5]
 i  L           R
 1  2           4     Sum = 7 (too small, move L right)

[1, 2, 2, 3, 4, 4, 5]
 i     L        R
 1     2        4     Sum = 7 (too small, skip duplicate 2, move L right)

[1, 2, 2, 3, 4, 4, 5]
 i        L     R
 1        3     4     Sum = 8 (found triplet! move both L and R)


*/
