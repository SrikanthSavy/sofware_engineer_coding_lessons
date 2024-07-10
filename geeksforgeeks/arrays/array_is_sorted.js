// Check if a given array is sorted in ascending order

const sortedArray1= [8,12,15]
const sortedArray2= [8,10,10,12]
const sortedArray3= [100]
const sortedArray4= [100,20,200]


function isSortedArray(array)
{
    let n=0
    while(n<=array.length)
    {
        if(array[n]>array[n+1])
            return false
        n++
    }
    return true
}  //Time COmplexity == O(n)


console.log(`Array1 is Sorted= ${isSortedArray(sortedArray1)}`)
console.log(`Array2 is Sorted= ${isSortedArray(sortedArray2)}`)
console.log(`Array3 is Sorted= ${isSortedArray(sortedArray3)}`)
console.log(`Array4 is Sorted= ${isSortedArray(sortedArray4)}`)