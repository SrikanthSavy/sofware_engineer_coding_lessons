/*
Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. 
The arr is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

Characteristics of Insertion Sort:
    This algorithm is one of the simplest algorithm with simple implementation
    Basically, Insertion sort is efficient for small data values
    Insertion sort is adaptive in nature, i.e. it is appropriate for data sets which are already partially sorted.

Algorithm Logic
==============
Insertion Sort Algorithm 
To sort an arr of size N in ascending order: 

Iterate from arr[1] to arr[N] over the arr. 
Compare the current element (key) to its predecessor. 
If the key element is smaller than its predecessor, compare it to the elements before. 
Move the greater elements one position up to make space for the swapped element.

*/

function insertSort(arr)
{
    let size = arr.length
    let leftIndex=0
    for(let i=1;i<size;i++)
    {
        for(let j=0;j<=leftIndex;j++)
        {
            if(arr[j]>arr[i])
                [arr[j],arr[i]]=[arr[i],arr[j]]
        }
        leftIndex+=1
    }
    return arr
}
/*
    Time Complexity :  outer loop : n-1 times
                       Inner Loop = 1+2+...+n time = n(n+1)/2
                       f(n) = O(n^2)
    Space Complexity: O(1)

*/

const arr =[50,20,40,60,10,30]
console.log(`Insert Sort :${insertSort(arr)}`)


/*
Time Complexity:

Worst Case: O(n^2)
Average Case: O(n^2)
Best Case: O(n) In the best case (already sorted array), the inner loop will always find that arr[j] <= arr[i], so no swaps occur, resulting in O(n) time.



NOTE: In th above code you are performing more swaps then required
      Instead , we need to swap only with its correct position 

*/

function classicInsertionSort(arr)
{
    let size = arr.length

    for(i=1;i<size;i++)
    {
        let currentElement = arr[i]  /// Store the current element to be inserted
        let j =i-1

        // Move elements of arr[0..i-1] that are >  currentElement
        // to one position ahead of their current position
        while(j>=0 && arr[j]>currentElement)
        {
            arr[j+1]=arr[j]
            j-=1
        }

        // Place currentElement at its correct position
        arr[j+1] =currentElement
    }

    return arr
}


function insertSortGFG(a,n)
{
    for(let i=1;i<n;i++)
    {
        let currentElement = a[i] //current element to be inserted => LeftSorted List
        let leftListLastItemIndex = i-1 // LeftListLastItem

        while(leftListLastItemIndex>=0 && a[leftListLastItemIndex]>currentElement)
        {
            //move items to right by 1 position
            a[leftListLastItemIndex+1]=a[leftListLastItemIndex]
            leftListLastItemIndex-- // travese back to 0
        }

        a[leftListLastItemIndex+1]=currentElement // since last statement would "increment" this variable "leftListLastItem"

    }
    return a
}


console.log(`Insert Sort My logic :${insertSortGFG(arr,arr.length)}`)
//Explanation
/*
    Here's how this classic insertion sort works:

We start from the second element (index 1) and consider it as the current element to be inserted into the sorted portion of the array.
We compare this element with the elements before it, moving larger elements one position ahead to make space for the current element.
We continue this process for all elements in the array.

Key differences from the previous implementation:

Instead of swapping elements repeatedly, we shift elements.
We store the current element and only place it in its correct position after all necessary shifts.

Time Complexity:

Worst case and Average case: O(n^2)
Best case (already sorted array): O(n)

Space Complexity: O(1)


???? IMportant explaination 

1) let j = i - 1;
    This line initializes a variable j to point to the element immediately before the current element we're trying to insert.

    i is the index of the current element we're considering for insertion.
    We start comparing from the element just before it, which is at index i - 1.
    This j will be used to traverse backwards through the sorted portion of the array.

2) j--; (inside the while loop)

    This line decrements the j index, moving it one position to the left in the array.


*/
