const array = [10,5,20,8,50]

function generalMax(array)
{
    let n = 0
    let index =0
    while(n<array.length)
    {
        if(array[n]<array[n+1])
            index=n+1
        n++
    }
    return index
}

console.log(`Max Index of array = ${generalMax(array)}`)

//Time Complexity is = O(n)
