/*
    Inversion Count for an array indicates – how far (or close) the array is from being sorted. 
    If the array is already sorted, then the inversion count is 0, but if the array is sorted in reverse order, the inversion count is the maximum. 
*/

//Using Merge sort Logic for finding Invesrion Count of an Array


function merge(a, low, mid, high) {
    let leftArraySize = mid - low + 1
    let rightArraySize = high - mid

    // Create left and right subarrays
    let leftArray = []
    for (let i = 0; i < leftArraySize; i++)
        leftArray[i] = a[i + low]
    let rightArray = []
    for (let j = 0; j < rightArraySize; j++)
        rightArray[j] = a[mid + 1 + j]

    let count = 0 // total count
    // logic of sorting in merge
    let i = 0, j = 0, k = low
    while (i < leftArraySize && j < rightArraySize) {
        if (leftArray[i] <= rightArray[j]) {
            a[k++] = leftArray[i++]

        } else {
            a[k++] = rightArray[j++]
            count = count + (leftArraySize - i) // if current element is a[i] > b[j] => there are (mid-ith index ) inversions
        }
    }

    while (i < leftArraySize) //  // Handle remaining elements in array a
    {
        a[k++] = leftArray[i++] // storing a-arry item in result[]
    }

    //Similarly Check b-array size
    while (j < rightArraySize)   // Handle remaining elements in array b
    {
        a[k++] = rightArray[j++]  // store b-arry elemnt in result 
    }
    return count
}

function mergeCount(arr, low, high) {
    let count = 0
    if (low < high) {
        let mid = Math.floor((low + high) / 2)

        count = count + mergeCount(arr, low, mid)
        count += mergeCount(arr, mid + 1, high)
        count += merge(arr, low, mid, high)
    }

    return count
}


//Standard Double Iteration Approach
function invesrionCountofArray(a) {
    let length = a.length
    let count = 0
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (i < j && a[i] > a[j])
                count++
        }
    }

    return count
} // time complexity 


const array1 = [8, 4, 2, 1]
const array2 = [1, 20, 6, 4, 5]

console.log(`Inversion count of Array1 : ${mergeCount(array2, 0, array2.length-1)} `)
//console.log(`Inversion count of Array1 : ${invesrionCountofArray(array1)}`)
//console.log(`Inversion count of Array1 : ${invesrionCountofArray(array1)}`)
//console.log(`Inversion count of Array2 : ${invesrionCountofArray(array2)}`)


function countAndMerge(arr, l, m, r) {
    let n1 = m - l + 1, n2 = r - m;
    let left = [], right = [];

    // Create left and right subarrays
    for (let i = 0; i < n1; i++)
        left[i] = arr[i + l];
    for (let j = 0; j < n2; j++)
        right[j] = arr[m + 1 + j];

    let res = 0, i = 0, j = 0, k = l;

    // Merge left and right subarrays and count inversions
    while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
            res = res + (n1 - i); // Count inversions
        }
    }

    // Copy remaining elements of left subarray, if any
    while (i < n1)
        arr[k++] = left[i++];

    // Copy remaining elements of right subarray, if any
    while (j < n2)
        arr[k++] = right[j++];

    return res;
}

function countInv(arr, l, r) {
    let res = 0;
    if (l < r) {
        let m = Math.floor((r + l) / 2);

        // Recursively count inversions in the left subarray
        res += countInv(arr, l, m);

        // Recursively count inversions in the right subarray
        res += countInv(arr, m + 1, r);

        // Count inversions during the merge step
        res += countAndMerge(arr, l, m, r);
    }
    return res;
}

let arr = [1, 20, 6, 4, 5]
let n = arr.length;
console.log(` ChatGPT code :${countInv(arr, 0, n - 1)} `)