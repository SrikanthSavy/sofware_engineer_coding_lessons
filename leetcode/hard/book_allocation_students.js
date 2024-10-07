/*

*/
const arr = [2, 1, 3, 4];
let books = 4;
let students = 2;

const allocateBooks = (arr, n, m) => {
  //Edge case: when students > books
  if (m > n) return -1;

  let sum = 0;
  //calculate sum to assign to end
  for (let i = 0; i < n; i++) sum += arr[i];

  let start = 0;
  let end = sum;
  let ans = -1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (isValid(arr, n, m, mid)) {
      //Go left side to find even smaller ans
      ans = mid; // ans is valid
      end = mid - 1;
    } else {
      // Go Right side to find answer
      start = mid + 1;
    }
  }
  return ans;
};

//mid=== maxAllowed
const isValid = (arr, n, m, maxAllocated) => {
  let student = 1; //First student
  let pages = 0; // Initial pages value for student 1 =0

  //Continous allomnet of books
  for (let i = 0; i < n; i++) {
    //Edge case where no. of pages for each book  > mid (or)  No possible way to assign books , so mid is possible eG : mid=5 & Arr[1,6,3]
    if (arr[i] > maxAllocated) return false;

    if (pages + arr[i] <= maxAllocated) {
      // possible to assign to Student 1
      pages += arr[i];
    } else {
      //Not possible to assign to Student 1 , => move to Student 2
      student++;
      pages = arr[i]; // reset pages to new student
    }
  }

  /*  if(student>m)
    return false
  else
    return true
*/
  return student > m ? false : true;
};

console.log(allocateBooks(arr, books, students));
