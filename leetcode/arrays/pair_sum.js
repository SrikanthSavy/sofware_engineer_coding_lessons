/*///

    Problem: Given a Sorted Array. Find only pair of numbers to sum = target in Linear time

    ex : a = [2,5,9,11,15,17]  if target = 28   o/p (3,5)
        a = [2,5,9,11,15,17]  if target = 13   o/p (0,3)

    Hint : Use 2- pointer approach 
    i =start j = end
    i++ if( a[i]+a[j]<target)
    j-- if( a[i]+a[j]>target)  ( smaller no + bigger no >target) => we have to move inward ( Its  asorted array ( Asc))

*/

const arr = [2, 5, 9, 11, 15, 17];
const arr1 = [21, 50, 91, 111, 151, 171]; //target : 202

function pairSum(a, target) {
  let i = 0;
  let j = a.length - 1;

  while (i < j) {
    if (a[i] + a[j] > target) {
      j--;
    } else if (a[i] + a[j] < target) {
      i++;
    } else {
      console.log(`Target Index are (${i},${j} )`);
      console.log(`The Values at these Index are ${a[i]} & ${a[j]}`);
      return "";
    }
  }
} // Time Complexity  : O(n)
//Aux Space         : O(1)

pairSum(arr, 13);
pairSum(arr1, 202);
