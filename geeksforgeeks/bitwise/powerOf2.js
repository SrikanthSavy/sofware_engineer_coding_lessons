/*
    Find if given Number is of Power of 2
    Eg: 1 , 2, 4 , 8 are 2^ 
    3,9 5 etc.. arre not power of 2 
*/
// My Logic would be that Power of2 = will always have 1 SET it i.e.
// 2 = 0000..010
// 4 = 0000..100
// 8 = 0000.1000 so on  
// USE Brian Cunningman Algorithm

function myPowerOf2(n) 
{ 
    if(n>0 && (n&(n-1))==0 )
       console.log(`YES, given number is  power of 2`)
    else
        console.log(`NO, given number  is Not a power of 2`)
}

let n1 = 4
let n2 = 6
let n3 = 32
let n4 = 0

myPowerOf2(n1)
myPowerOf2(n2)
myPowerOf2(n3)
myPowerOf2(n4)

// Time Complexity : O(1) when its 
// Space Complexity : O(1)

// This function can also be rewritten in 1- line
function powerOf2(n)
{
    return (n>0 && ((n&(n-1))===0))
}