/*
    find non repeating number in a given array
    eg: a = [10,2,2,54,36,54,36]
    o/p: 10
    Time Complexity should be O(n)
*/

//Hint: we need to Use Bitwise XOR operator
//Since 1^1=0 1^0=1 0^0=0
// so if we XOR all the elements in the Array , then we will be left with 1 element(which is not unique)

const arr = [9, 10, 2, 45, 36, 2, 45, 36, 9];

function uniqueNumber(a) {
  let result = 0;
  for (let i of arr) {
    result ^= i;
  }
  return result;
}

console.log(uniqueNumber(arr));

//Time Complexity   : O(n)
//Aux Space         : O(1)
