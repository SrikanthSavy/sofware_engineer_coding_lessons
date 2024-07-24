/*
BUBBLE SOrt => IS "IN-PLACE" SORT Algorithm
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. 
i.e First-Pass,Second-Pass,so on , till No Swap is required

Eg: Let's sort this list of numbers: [5, 1, 4, 2, 8]
Pass 1:
[(5), (1), 4, 2, 8] → [1, 5, 4, 2, 8]  (5 and 1 swapped)
[1, (5), (4), 2, 8] → [1, 4, 5, 2, 8]  (5 and 4 swapped)
[1, 4, (5), (2), 8] → [1, 4, 2, 5, 8]  (5 and 2 swapped)
[1, 4, 2, (5), (8)] → [1, 4, 2, 5, 8]  (no swap)

Pass-Second
Repeat Process, till No swap is req
i.e The algorithm needs one whole pass without any swap to know it is sorted

NOTE: This algorithm is not suitable for large data sets as its average and worst case time complexity is quite high.
*/

const array = [5,1,4,2,8]
function bubbleSort(arr)
{
    let size = arr.length
    let swap = true
    while(swap)
    {
        swap=false
        for(let i=0;i<size-1;i++)
        {
            if(arr[i]>arr[i+1])
            {
                let temp = arr[i]
                arr[i]= arr[i+1]
                arr[i+1] = temp

                swap = true
            }

        } // End of for()
    } // End of while()
    return arr
}

console.log(`Sorted array :`,bubbleSort(array))


//Geeks Logic uses JavaScript Desctrution concept to Swap in place array items
function bubbleSortWithObjDestruction(arr)
{
    let size = arr.length
    let swap = true
    while(swap)
    {
        swap=false
        for(let i=0;i<size-1;i++)
        {
            if(arr[i]>arr[i+1])
            {
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]] //JavaScript feature called array destructuring assignment to swap two elements in the array.
                swap = true
            }

        } // End of for()
    } // End of while()
    return arr
}

console.log(`Sorted With Array Destruction array :`,bubbleSortWithObjDestruction(array))

/*
    Time Complexity

    Key points:
            The while loop could potentially run n times in the worst case.
            Inside the while loop, there's a for loop that always iterates n-1 times.
            The swapping operation inside the if statement is O(1).

            Therefore, the overall time complexity is:

            Worst case: O(n^2)
            Average case: O(n^2)
            Best case: O(n)


    Space Complexity:
The space complexity is O(1) because it sorts the array in-place, using only a constant amount of extra memory regardless of the input size.
*/