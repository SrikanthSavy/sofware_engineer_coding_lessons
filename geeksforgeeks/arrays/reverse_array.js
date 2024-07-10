const array1 = [10,5,7,30,40]
const arrayup = [10,5,7,30,40]  // NOTE: In Javascript , we already have array.reverse() == which will revese

const array2 = [30,20,10]
const array3 = [10]

function reverseArray(array)
{
    let n = 0
    const length = array.length
   
    while(n<array.length/2)
    {
        let temp = array[n] 
        array[n] = array[(length-1)-n]
        array[(length-1)-n]=temp
        //console.log(`when n= ${n} the array =${array}`)
        n++
    }
    return array
} //Time Complexity O(n/2) i.e O(n)

// Naive method : Use temp [] and traverse from index(length-1)...0
function naiveReverse(array)
{
    //console.log(array.length)
    let temp=[]
    for(let i=array.length-1; i>=0;i--)
        temp.push(array[i])

    array=temp

    return array
} // Time Complexity is O(n)

console.log(`reverse of Array1: ${reverseArray(array1)}`)
console.log(`reverse of Array2: ${reverseArray(array2)}`)
console.log(`reverse of Array3: ${reverseArray(array3)}`)
console.log(`reverse of Array Naive: ${naiveReverse(arrayup)}`)