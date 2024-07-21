/*
    Find a square root of Number 
    IF exact number is not found , if decimals, mode to ceil/floor of the number
    eg: x=4 O/p=2, x=9 O/p=3 , x=21 o/p= 4
*/

//Non-linear approch
//One personal approach is 
function squareRoot(num)
{
    if(num<=3)  //This is a constant time operation, O(1).
        return 1
    let mid= Math.ceil(num/2)  //This is a constant time operation, O(1).

    while(mid>1) //The time complexity of this algorithm is O(log n), where n is the input number. 
    {
        let midsquare= mid*mid
        let mid_plus1= (mid+1)*(mid+1)

        if(midsquare===num || (midsquare<num && mid_plus1>num))
            return mid
        else if(midsquare>num)
            mid=Math.ceil((mid-1)/2)
        else if(mid_plus1<=num)
            mid+=1
    }
}

//GEeks Logic
function geeksSquareRoot(number) //Time Complexist = O(logn)
{
    let low =1
    let high = number
    let res =1 // Final result we Store here 

    while(low<=high)
    {
        let mid = Math.floor((low+high)/2)
        let midSquare= mid*mid
        if(midSquare===number)
            return mid
        else if(midSquare>number)
            high = mid-1            
        else //if(midSquare<number)
        {
            low = mid+1
            res = mid
        }
    }
    return res
}

//Liner way of doing this is 
//Time Complexity = @(Root(n)) ==> @(/^n)
function linerSquareRoot(number)
{
    let i=1
    while(i*i <= number)
        i++
    
    return (i-1)

    /*
    for(i=1;i<=Math.ceil(number/2);i++)
    {
        if(i*i ===number)
            return i
        else if(i*i>number)
            return (i-1)

    }*/
}
// console.log(`sq Root of 4: ${squareRoot(4)}`)
// console.log(`sq Root of 14: ${squareRoot(14)}`)
// console.log(`sq Root of 25: ${squareRoot(25)}`)
// console.log(`sq Root of 36: ${squareRoot(36)}`)

console.log(`sq Root Geeks Logic 4: ${geeksSquareRoot(4)}`)
console.log(`sq Root Geeks Logic 14: ${geeksSquareRoot(14)}`)
console.log(`sq Root Geeks Logic 25: ${geeksSquareRoot(25)}`)
console.log(`sq Root Geeks Logic 36: ${geeksSquareRoot(36)}`)

//  console.log(`sq Root of 4: ${linerSquareRoot(4)}`)
//  console.log(`sq Root of 14: ${linerSquareRoot(14)}`)
//  console.log(`sq Root of 25: ${linerSquareRoot(25)}`)
//  console.log(`sq Root of 36: ${linerSquareRoot(36)}`)
