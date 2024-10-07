/*
    Binary Search: ( Works only on Sorted-Array)

    Search : //Target =12  
*/

const arr = [-1, 0, 3, 4, 5, 9, 12, 17, 23];
let target = 10;

var binarySearch = (arr, target) => {
  let n = arr.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    //   Optimimized way to fit Leet code as WORSt case n =2^31 if.e st= 2^31 end= 2^31 && st+ end > 2^31
    let mid = Math.ceil(start + (end - start) / 2);

    //let mid = Math.ceil((start + end) / 2);
    if (arr[mid] < target) start = mid + 1;
    else if (arr[mid] > target) end = mid - 1;
    else return mid;
  }
  return -1;
};

console.log(binarySearch(arr, target));

///////RECURSION to do Binary SEARch

function recursionBinarySearch(arr, target, start, end) {
  if (start <= end) {
    let mid = Math.ceil(start + (end - start) / 2);
    if (target < arr[mid])
      return recursionBinarySearch(arr, target, start, mid - 1);
    else if (target > arr[mid])
      return recursionBinarySearch(arr, target, mid + 1, end);
    else if (target === arr[mid]) return mid;
  }
  return -1;
}

console.log(
  "Recusrion : ",
  recursionBinarySearch(arr, target, 0, arr.length - 1)
);
