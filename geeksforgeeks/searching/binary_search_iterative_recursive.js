/*
    search A = [10,20,30,40,50,60]
    find 10 = index 0

    NOTE: In binary search . Elements are in "Sorted Order"
    LOGIC: have 2 pointer i.e low = 0-index  high = arraylength-1
    calculate mid = ceil[low+high/2]   and we need to find "x". Present return (index) or return -1
    Now, Compare a[mid] , if x< a[mid] , then move high=mid-1
         Compare a[mid]>x , then mode low = mid+1 and repeat comparison 
    
    When to stop : if low>=high

    NOTE: It is recommended to use " ITERATIVE" approach . Since, Time Complexity = O(logn) Space Compl= O(1) const
           NOT-Recommended-- "RECURSIVE" since Time Complexity = O(logn) , but Space Complexity - O(logn) not const
           since logn- function call recursively

*/
//console.log(Math.ceil(0+0/2)) //O/P:0
const array1 = [10,20,30,40,50,60]
//Iterative -Search
function binarySearch(array,x)
{
    let low = 0
    let high = (array.length)-1
    
    while(low<=high)
    {
        let mid = Math.ceil((low+high)/2)
        //console.log(mid)
        if (array[mid]===x)
            return mid
        else if(x<array[mid])
            high = mid-1
        else
            low = mid +1
    }
    return -1
}//Time Complexity is O(logn)
// Space Complexity = O(1)

// Recursive Search
function binarySearchRecursive(array,low,high,x)
{   
    if(low>high )
        return -1

    let mid = Math.floor(low+high/2)
    if(x===array[mid])
        return mid
    else if (x<array[mid])
        return binarySearchRecursive(array,low,mid-1,x)
    else 
        return binarySearchRecursive(array,mid+1,high,x)

}
//Time Complexity is O(logn)
// Space Complexity = O(logn) // Function calls are of logn

const array2 = [10,20,30,40,50,60]

let low = 0
let high = (array2.length)-1
//console.log(`find 10 in array Iteratively :${binarySearch(array1,5)}`)

console.log(`find  in array Recursively :${binarySearchRecursive(array2,low,high,10)}`)
