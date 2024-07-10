// Move all zeros in a array to end
//And peserve the order of other elements
//Usecase [8,0,5,0,0,7] ==> [8,5,7,0,0,0]  2) [0,0,9,0] ==>[9,0,0,0] 3)[10,20] =>[10,20]

const array1 = [8,0,5,0,0,7]
const array1Naive = [8,0,5,0,0,7]
const array2 = [0,0,9,0]
const array3 = [10,20]

function moveZerotoEnd(array)
{
    let temp=[]
    for(let i=array.length-1;i>=0;i--)
    {
        if(array[i]===0)
           temp.push(0)
        else
            temp.unshift(array[i])
    }
    return temp
}  //Time complexity (@(n))

//Naive way , we keet track of non-zero element count while traversing the array and when we find any non zero element, we simpliy move it arr[count]
function naiveMove0(array)
{
    let nonZeroCount =0
    for(let i=0;i<array.length;i++)
    {
        if(array[i]!==0)
        {
            [array[i],array[nonZeroCount]]=[array[nonZeroCount],array[i]]
            nonZeroCount++
        }
    }
    return array
} //Time Complexity @(n) and Aux Space O(1)



console.log(`array 1:${moveZerotoEnd(array1)}`)
console.log(`Naive array 1:${naiveMove0(array1Naive)}`)
//naiveMove0(array1Naive)














/*

function moveZerotoEnd(array)
{
    for(let i=array.length-1;i>=0;i--)
    {
        if(array[i]===0)
            array.push(array.splice(i,1))
        else
            array.unshift(array.splice(i,1))
    }

    return array
}

*/