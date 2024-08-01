/*
Problem Statement:
    Given a number N and a position K, we need to check whether the Kth bit (from right to left) in the binary representation of N is set (1) or not (0).
For example:
    If N = 5 (binary: 101) and K = 1, the answer is yes (1st bit from right is set).
    If N = 5 (binary: 101) and K = 2, the answer is no (2nd bit from right is not set).

*/


/*
There are two common approaches to solve this problem:
    1) Using Right Shift (>>)
    2) Using Left Shift (<<)

Let's explore both:
    1) Using Right Shift: The idea is to right-shift the number N by K-1 positions and then check if the least significant bit is 1.
*/
 function rightShiftIsSet(n,k)
 {
    if((n>>(k-1) & 1 )==1) 
        console.log(`${k}th bit of number ${n} is a SET`)
    else
        console.log(`${k}th bit of number ${n} is a NOT a SET`)
 }
 rightShiftIsSet(5,3) //Time Complexity== O(1)
/*
 Explanation:
    -> We right-shift N by K-1 positions. This brings the Kth bit to the rightmost position.
    -> We then perform a bitwise AND (&) operation with 1.
    -> If the result is 1, the Kth bit was set. If it's 0, the Kth bit was not set.

    For example, if N = 5 (101 in binary) and K = 1:
        5 >> (1-1) = 5 >> 0 = 101
        101 & 1 = 1
    The result is 1, so the 1st bit is set.
*/

//USING  LeftShit (<<)
function leftShiftIsSet(n,k)
{   
    if(n & (1<<(k-1)) > 1) // need a Postive number
        console.log(`leftShift: ${k}th bit of number ${n} is a SET`)
    else
        console.log(`leftShift: ${k}th bit of number ${n} is a NOT a SET`)
}
 
leftShiftIsSet(5,3) //Time Complexity== O(1)
/*
Explanation:
    -> We left-shift 1 by K-1 positions. "This creates a number with only the Kth bit set.""
    -> We then perform a bitwise AND (&) operation with N.
    -> If the result is non-zero, the Kth bit in N was set. If it's zero, the Kth bit was not set.

For example, if N = 5 (101 in binary) and K = 1:
            1 << (1-1) = 1 << 0 = 1
            101 & 001 = 1
    The result is non-zero, so the 1st bit is set.
*/

//Naive way (Ignore)

function naiveIsSet(n,k)
{
    let x=1
    for(let i=0;i<(k-1);i++)
    {
        x=x*2
    }
    //This will give you Binary Represtation of Number 
    //console.log("Number(n).toString(2) :",Number(n).toString(2)) 
    //console.log("Number(n).toString(2) :",5..toString(2)) 

    console.log(`${n} & ${x} value = ${n&x} `) //o/p : 4 (100)
    if(n&x!==0)
        console.log("Given kth bit on Number is Set")
    else
    console.log("Not a Set")
}

naiveIsSet(5,3) // Time Complexity =@(k)