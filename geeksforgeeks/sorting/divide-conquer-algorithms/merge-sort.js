/*
 1) Merge Sort !== IN-Place Sorting ==> needs Extra space to sort
 2) Merge Sort  : Uses "Divide & Conquare" - Stagergy
                => Divide Prob into smaller problems && find Sol of these smaller problems
                    => finally combine(merge) these smaller solution to get whole sort
 Logic :
 a[10,90,80,40,30,70,20,60]
 l=0 index h =7 index
  mergeSort(l,h)
  {
    if(l<h)
    {
        mid = l+h/2    // BREAK THE PROB into parts 
        mergeSort(l,mid)
        mergeSort(mid+1,h)
        merge(l,mid,h)
    }
  }
*/
//  Merge sort need 2 function 
// 1) mersgeSort() = dives the prob into smaller prob ( recursive call) and then call Merge on these sub prob sol
// 2) merge(leftArray,RighArray) // Merge these Summer Sub SProb with sorting

function mergeSort(array) {
  let size = array.length
  if (size <= 1)
    return array

  let mid = Math.floor(size / 2)
  // splitting array to mid and Recursively calling  mergeSort()
  let leftArray = mergeSort(array.slice(0, mid))
  let rightArray = mergeSort(array.slice(mid))

  // Finally merging the subresult
  return merge(leftArray, rightArray)
}

function merge(a, b) {
  let alength = a.length
  let blength = b.length
  let result = []
  let i = 0, j = 0, k = 0
  //check if a-arr has items && b-arr has items to merge
  while (i < alength && j < blength) {
    if (a[i] < b[j])  // check if first item from a-array is smaller then 2nd item  from b-arr
    {
      result[k] = a[i] // storing smaller item in result[]
      k++    //Increment result[]-index 
      i++    //Increment a-arr[] index for comparison
    } else { //a[i]>b[j]
      result[k] = b[j]  // store b-arry elemnt in result , as its lower then a-arry
      k++               //Increment result[]-index 
      j++                //Increment b-arr[] index for comparison
    }
  } //End of while()

  //Now we need to check "EDGE-case" i.e. array sizes are different 
  while (i < alength) //  // Handle remaining elements in array a
  {
    result[k] = a[i] // storing a-arry item in result[]
    k++    //Increment result[]-index 
    i++
  }

  //Similarly Check b-array size
  while (j < blength)   // Handle remaining elements in array b
  {
    result[k] = b[j]  // store b-arry elemnt in result 
    k++               //Increment result[]-index 
    j++
  }

  return result
}

const arr = [38, 27, 43, 3, 9, 82, 10];
//const sortedArr = mergeSort(arr);
console.log("Sorted array:", mergeSort(arr));

//console.log(`Mergesort :${mergeSort(array1,array2,array1.length,array2.length)}`)





/*
  NOTES
  =====
  ->Merge sort is a divide-and-conquer algorithm that works by dividing the unsorted list into n sublists,
      each containing one element (a list of one element is considered sorted).
  -> Then, it repeatedly merges sublists to produce new sorted sublists until there is only one sublist remaining.
  -> Here's an implementation of Merge Sort in JavaScript with inline comments

     We need to wriite 2-functions
     1) mergeSort(l,h)
     2) merge(l,mid,h)

*/

//TIME COMPLEXITY 
/*
Time Complexity
      ->Merge Function: O(n + m) where n and m are the lengths of the two arrays being merged.
      ->MergeSort Function: The time complexity is O(n log n) because:
             ->The array is divided in half at each recursive step ===(log n divisions).
                ->Merging the divided arrays takes linear time ===(n).

Space Complexity 
      - > create an array of size O(n+m) == O(n)
          
*/


/*

Analysis of Merge Sort:
======================
    A merge sort consists of several passes over the input. The first pass merges segments of size 1, the second merges segments of size 2, and
    the i-th pass merges segments of size 2i-1.
    Thus, the total number of passes is [log2n]. As merge showed, we can merge two sorted segments in linear time, which means that each pass takes O(n) time.
     Since there are [log2n] passes, the total computing time is O(nlogn).

Applications of Merge Sort: 
=========================
  Merge Sort is useful for sorting linked lists in O(N log N) time. In the case of linked lists, the case is different mainly due to the difference
  in memory allocation of arrays and linked lists. Unlike arrays, linked list nodes may not be adjacent in memory. 
  Unlike an array, in the linked list, we can insert items in the middle in O(1) extra space and O(1) time. 
  Therefore, the merge operation of merge sort  can be implemented without extra space for linked lists.

In arrays, we can do random access as elements are contiguous in memory. 
Let us say we have an integer (4-byte) array A and let the address of A[0] be x then to access A[i], we can directly access the memory at (x + i*4). 
Unlike arrays, we can not do random access in the linked list. 
Quick Sort requires a lot of this kind of access.
In a linked list to access i’th index, we have to travel each and every node from the head to i’th node as we don’t have a contiguous block of memory. 
Therefore, the overhead increases for quicksort. Merge sort accesses data sequentially and the need of random access is low.
    Inversion Count Problem
    Used in External Sorting

 Advantages of Merge Sort:
=========================
  Merge sort has a time complexity of O(n log n), which means it is relatively efficient for sorting large datasets.
  Merge sort is a stable sort, which means that the order of elements with equal values is preserved during the sort.
  It is easy to implement thus making it a good choice for many applications.
  It is useful for external sorting. This is because merge sort can handle large datasets, it is often used for external sorting, 
      where the data being sorted does not fit in memory.
  The merge sort algorithm can be easily parallelized, which means it can take advantage of multiple processors or cores to sort the data more quickly.
  Merge sort requires relatively few additional resources (such as memory) to perform the sort. This makes it a good choice for systems with limited resources.

  Drawbacks of Merge Sort:
==========================
  Slower compared to the other sort algorithms for smaller tasks. 
        Although effecient for large datasets its not the best choice for small datasets.
  The merge sort algorithm requires an additional memory space of 0(n) for the temporary array. 
     This is to store the subarrays that are used during  the sorting process.
  It goes through the whole process even if the array is sorted.
  It requires more code to implement since we are dividing the array into smaller subarrays and then merging the sorted subarrays back together.


*/