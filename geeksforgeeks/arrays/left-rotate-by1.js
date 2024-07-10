const array1= [1,2,3,4,5]
const array2 = [30,5,20]
const array3 = [10]

// Left rotate by 1 => array1= [2,3,4,5,1]  1) array2 =[5,20,30]
console.log(`Before pop:${array1}`)
array1.push(array1.shift())
console.log(`After pop:${array1}`)

console.log(`Before pop:${array2}`)
array2.push(array2.shift())
console.log(`After pop:${array2}`)

const array11= [1,2,3,4,5]
const array22 = [30,5,20]
const array33 = [10]

//without Javascript functions (GFG-code)
function rotateBy1(array)
{
    let temp= array[0]
    for(let i=1;i<array.length;i++)
        array[i-1]=array[i]

    array[array.length-1]=temp
    return array
} // Time Complexity here: @(n)  Aux Space O(1)



console.log(`Array11 after rotate: ${rotateBy1(array11)}`)
console.log(`Array22 after rotate: ${rotateBy1(array22)}`)
console.log(`Array33 after rotate: ${rotateBy1(array33)}`)

