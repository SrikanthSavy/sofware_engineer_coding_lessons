/*
    [1,10,10,10,10,20,20,40]  x=20 & occurance = 2
    [15,15,15]                x=15 & occurance = 3
    [10,20,30]                x=12 7 occurance = 0

    LOGIC: TO do this in O(logn) 
            1) find first occurance index   = fn
            2) last index occrance          = ln 
            then total = (ln-fn)+1
 */

function countOfOccurance(array,x)   // TIme Complexity = O(logn+logn+1) = O(2logn+1) = O(logn)
{
    let firstIndex= firstoccranceIndex(array,x)
    console.log(`fristIndex:${firstIndex}`)
    if(firstIndex===-1)
        return -1
    let lastIndex = lastOccuranceIndex(array,x)
    console.log(`lastIndex:${lastIndex}`)  

    return (lastIndex-firstIndex)+1
}


function firstoccranceIndex(array,x)
{
    let low = 0
    let high = array.length -1
    while(low<=high)
    {
        let mid = Math.floor(low+high/2)
        if(x===array[mid])
        {
            if(array[mid-1]===x)
                high=mid-1
            else
                return mid
        }
        else if( x<array[mid])
            high=mid-1
        else
            low = mid+1
    }
    return -1
}

function lastOccuranceIndex(array,x)
{
    let low = 0 
    let high = (array.length)-1  
    while(low<=high)
    {
        let mid = Math.floor((low+high)/2)
        if(x===array[mid])
        {
            if(array[mid+1]===array[mid])
                low=mid+1
            else
                return mid
        }else if(x<array[mid])
            high=mid-1
        else
            low=mid+1
    }
    return -1
}

 
const array=[1,10,10,10,10,20,40]
console.log(`occurance of 10 :${countOfOccurance(array,10)}`)