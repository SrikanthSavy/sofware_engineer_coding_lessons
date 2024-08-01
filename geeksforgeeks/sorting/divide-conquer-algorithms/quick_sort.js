/*
QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot(in case of lomuto partition). There are many different versions of quickSort that pick pivot in different ways. 

    1) Always pick first element as pivot.
    2) Always pick last element as pivot (implemented below)
    3) Pick a random element as pivot.
    4) Pick median as pivot.

The key process in quickSort is partition(). 
        Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. 
All this should be done in linear time.
*/

/*  Quick sort using Lomuto Partition -- ie. Pivot = Last element(a[high])
    Partition- Logic  : a[1,2,4,5,9,76,40]
        -> Pick a Pivot element  p= a[high]  - Lomuto Partition
        --> i=low , j=high 
        Now, while()
        {
            first step : a[i]<pivot
                            i++
            second step : a[j]>pivot
                            j--
            if(i<j)
                => swap(a[i],a[j])
        }
        swap(pivot, a[j])
        return j
    }
    Quicksort(l,h)
    {
        if(l<h)
        {
            j = partition(a,l,h)
            quickSort(a,l,j)
            quicksort(a,j+1,h)
        }
        return a
    }
*/

//Lomuto PArtition
const arr = [10,80,30,90,40,50,70,]
let low = 0, high = arr.length-1

function lomuto_partition(arr,low,high)
{
    let i=low-1,j=high+1
    let pivot = high // === LastElement 

    while(i<j)
    {
        do{ // All elements i.e LHS<Pivot
            i++
        }while(arr[i]<arr[pivot])

        do{ // All elements i.e RHS>pivot
            j--
        }while(arr[j]>arr[pivot])

        if(i<j) // swap(a[i],arr[j])
            [arr[i],arr[j]]=[arr[j],arr[i]]     
    }
    //swap pivot with a[i] & return i  for Lomuto-partiton i.e pivot=last element
    //Swap Pivot with a[j]] & return j for pivot= first element
    [arr[pivot],arr[i]]=[arr[i],arr[pivot]]

    return i // Partition element
}



function quickSort(arr,low,high)
{
    if(low<high)
    {
        let j = lomuto_partition(arr,low,high)
        quickSort(arr,low,j-1)
        quickSort(arr,j+1,high)
    }
    return arr
}

let result = quickSort(arr,low,high)

console.log(`Quicksort : ${result}`)

