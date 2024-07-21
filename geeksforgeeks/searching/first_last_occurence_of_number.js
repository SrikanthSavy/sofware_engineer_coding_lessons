/*
    Find the first occurance of a Number in an array
    eg: find 20 : [1,10,10,10,10,20,20,40] O/P =5
    eg: find 15 : [10,20,30] O/P : -1

    Logic: 
*/

function firstOccuranceOfNumber(array, x)
{
    let low = 0 
    let high = (array.length)-1  
    //console.log(high) 
    while(low<=high)
    {
        let mid = Math.floor((low+high)/2)
        if(x===array[mid])
        {
            if(array[mid-1]===array[mid])
                high=mid-1
            else
                return mid
        }else if(x<array[mid])
            high=mid-1
        else
            low=mid+1
    }
    return -1
}
const array= [1,10,10,10,10,20,20,40] 
console.log(`First occrance of a Number 10: ${firstOccuranceOfNumber(array,10)}`)
console.log(`First occrance of a Number 20: ${firstOccuranceOfNumber(array,20)}`)
console.log(`First occrance of a Number 40: ${firstOccuranceOfNumber(array,40)}`)
console.log(`First occrance of a Number 45: ${firstOccuranceOfNumber(array,45)}`)


function lastOccuranceOfNumber(array, x)
{
    let low = 0 
    let high = (array.length)-1  
    //console.log(high) 
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

//const array2= [10,15,20,20,40,40] 
const array2= [5,8,8,10,10] 
console.log(`Last occrance of a Number 10: ${lastOccuranceOfNumber(array2,10)}`)
console.log(`Last occrance of a Number 20: ${lastOccuranceOfNumber(array2,20)}`)
//console.log(`Last occrance of a Number 40: ${lastOccuranceOfNumber(array2,40)}`)
//console.log(`Last occrance of a Number 45: ${lastOccuranceOfNumber(array2,45)}`)