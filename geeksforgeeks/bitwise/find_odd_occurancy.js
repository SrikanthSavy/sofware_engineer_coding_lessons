/*  Find the (Only) odd occurance of number in an array
IMP: Assumption : ONLY 1 odd occuring number
    eg1: a=[4,3,4,4,4,5,5]  o/p = 3
    eg2: a[8,7,7,8,8]       o/p = 8

Brute Force , you need 2 loops and each element in first loop with second loop time
Time Complexity : O(n*n) = O(n2)
NOT Good

Using Bitwise Operation : You can do this in @(n) Time Complexity
Solution : Use Bitwise (XOR) i.e ^
4 important properties of Bitwise XOR(^)
    1) n ^ 0 = n            i.e. 4 ^ 0 = 4
    2) n ^ m = m ^ n        i.e. 4 ^ 5 = 5 ^ 4
    3) n^(m^p)= (n^m)^p     i.e. 4^(5^6) = (4^5)^6
    4) n ^ n = 0            i.e. 4 ^ 4 = 0

  Based on the above properties, we can treat our problem as 
    if an number is odd say "4" occurs odd time
    then 4^4^4 => 0^4 = 4
    therefore we can divide our problem (beased on assumption)
    eg1: a=[4,3,4,4,4,5,5] = 4^4^4^4 ^ 5^5 ^ 3
                           => 0 ^ 0  ^ 0  ^ 3 
                   Result  = 3 

*/
const arr1 = [4,3,4,4,4,5,5]
const arr2 = [8,7,7,8,8]
console.log(oddOccurance(arr1)) //o/p: 3
console.log(oddOccurance(arr2)) // O/p : 8 
function oddOccurance(arr)
{
    let result= arr[0]
    for(let i=1; i<arr.length; i++) // Looping through all elemnts to per (XOR)
        result = result ^ arr[i]
    return result
}
//Time Complexity : @(n)
// Aux Space      : O(1)



//Brute for method using 2 for()
function bruteForceOddOccurance(a)
{    
    for(let i=0; i<a.length; i++)
    {   
        let count = 0
        for(let j=0; j<a.length; j++)
        {
            if(a[i]===a[j])
                count++
        }
        
        if(count%2 !==0)  // Check if the count is odd
            return a[i];
    }

    return 0
} // Time Complexity = O(n2) space: O(1)
const arr3 = [8,7,7,8,8]
console.log(bruteForceOddOccurance(arr3))