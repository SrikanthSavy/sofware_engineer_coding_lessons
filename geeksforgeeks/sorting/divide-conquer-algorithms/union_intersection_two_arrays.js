/*
Given two unsorted arrays that represent two sets (elements in every array are distinct), find the union and intersection of two arrays.
Example: 
        arr1[] = {7, 1, 5, 2, 3, 6} 
        arr2[] = {3, 8, 6, 20, 7} 
    Then your program should print Union as {1, 2, 3, 5, 6, 7, 8, 20}. 
*/
let a = [7, 1, 5, 2, 3, 6 ]
let b =[3, 8, 6, 20, 7]

// Logic is 
/*
    1) Copy a and b to a new Arra = unionArray[]
    2) use JS: array.sort(function(a,b){return a-b}) // to sort the elements ( O(nlogn))
    3) now-Iterate the loop and check if a[i]===a[i-1] if so remove it
  Time Complexity for this 
                O(n+m+(n+mlogn+m) ==> assume (m+n=k)
                O(k+(klogk)+O(k))=> O(klogk)

 Space Complexity : O(k)
*/

function unionOfArray(a,b,asize,bsize)
{
    let c =[]
    for(let i=0;i<asize;i++)   // O(m(asize))
        c[i]=a[i]
    for(let j=0;j<bsize;j++)   //O(k-bsize)
        c[asize+j]=b[j]

    c.sort((a,b)=>a-b) // sort the union array (assum length of c=n)  Time complexity  for sorting =O(nlogn)
    
    let union=[]
    let k=0  // to get Index, without duplicate
    // remove the duplicates 
    for(let i=0;i<c.length;i++)  //Time O(n)
    {
        if(c[i]!==c[i-1] || i===0)
            union[k++]=c[i]
    }

    return union
}

let unionResult = unionOfArray(a,b,a.length,b.length)
console.log(`Union of array (nlogn): ${unionResult}`)

//Brute Force Method
function union(a,b,asize,bsize)
{
    let union =[]
    for(let i=0;i<asize;i++)
        union[i]=a[i]
    console.log(`union :${union}`)
    
    for(let j=0;j<bsize;j++)
    {
        let unquie_b=false
        for(let i=0;i<asize;i++)
        {
            if(b[j]===a[i])
                unquie_b=true
        }

        if(!unquie_b)
        {
            union[union.length]=b[j]
        }
    }

            //.sort(function(a, b) { return a - b })
    return union.sort((a,b)=> a-b)
}
/*
    Time Complexity = O(n*m)
    Space Complexity= O(n+m)

*/
//let res = union(a,b,a.length,b.length)
//console.log(`Union of array: ${res}`)





///////-------NOTES---------/////
/*
.sort(function(a, b) { return a - b; }) or array.sort((a,b)=>a-b) 

This is using JavaScript's built-in sort() method with a custom comparison function. Here's a detailed explanation:

-> sort() is an array method in JavaScript that sorts the elements of an array in place and returns the sorted array.
-> By default, sort() converts elements to strings and sorts them alphabetically. However, this doesn't work well for numbers (e.g., 10 would come before 2).
-> To fix this, sort() can take an optional comparison function as an argument. This function defines the sort order.
-> The comparison function takes two arguments, typically named a and b. These represent two elements being compared.
function(a, b) { return a - b; } is an anonymous function that serves as this comparison function.
-> Inside the function, a - b is calculated:
        If a is less than b, a - b will be negative.
        If a is greater than b, a - b will be positive.
        If a equals b, a - b will be zero.

The sort() method uses the return value of this function to determine the order:
    If the return value is negative, a is sorted before b.
    If the return value is positive, b is sorted before a.
    If the return value is 0, the order of a and b remains unchanged.
*/






















