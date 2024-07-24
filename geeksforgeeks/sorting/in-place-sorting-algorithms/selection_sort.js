/*
Selection sort - is "In-PLACE" sort Algorithm
    The algorithm divides the input list into two parts:
    --> A sorted portion at the left end
    --> An unsorted portion at the right end

    Initially, the sorted portion is empty and the unsorted portion is the entire list.
    The algorithm repeatedly selects the smallest element from the unsorted portion and moves it to the end of the sorted portion.
    This process continues, growing the sorted portion and shrinking the unsorted portion, until the entire list is sorted
*/

function selectionSort(arr)
{
    let size = arr.length
    
    for(let j=0;j<size;j++)  
    {
        let minIndex = j  // treat that minIndex, is start of Unsorted list i.e. jth Index
        for(let i=j+1;i<size;i++)
        {
            if(arr[minIndex]>arr[i]) // This logic is to find min - value in the remaining list i.e start from jth-index
                minIndex=i          
        }
        [arr[j],arr[minIndex]]=[arr[minIndex],arr[j]]  // Swap min_index -> jth-index
    }
    return arr
}

const array =[64,25,12,22,11]
console.log(`Selection Sort : `,selectionSort(array))

/*
    Time Complexity = 
          Worst case: Outer loog( n time)
                      inner loop (n-1)(n-2)(n-3)...1 = n* n= n^2

        Space Complexity = O(1)


 Explaination
 =============
 Time Complexity:

Worst Case: O(n^2)
Average Case: O(n^2)
Best Case: O(n^2)

Explanation:

The outer loop (j) runs n times.
For each iteration of the outer loop, the inner loop (i) runs (n-j-1) times.
This results in: (n-1) + (n-2) + ... + 2 + 1 = n(n-1)/2 comparisons.
Simplifying, this gives us O(n^2).

Even if the array is already sorted (best case), the algorithm still performs the same number of comparisons, hence the best case is also O(n^2).
Space Complexity: O(1)

Key Points:

    *)Selection sort always performs O(n^2) comparisons, making it inefficient for large lists.
    *)It performs at most n swaps, which can be advantageous when memory write is costly.
    *)It's an in-place sorting algorithm, meaning it doesn't require extra space proportional to the input size.
    *)The algorithm is not stable, meaning it may change the relative order of equal elements.

*/