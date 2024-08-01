
/*  
JavaScript Uses 32 bits Bitwise Operands
-> JavaScript stores numbers as 64 bits floating point numbers,but "all bitwise operations are performed on 32 bits binary numbers"."
-> Before a bitwise operation is performed, ""JavaScript converts numbers to 32 bits signed integers""".
-> After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.

*/

 //This will give you Binary Represtation of Number 5
 console.log("Number(n).toString(2) :",Number(5).toString(2))  //formula Number(n).toString(2)
 console.log("Number(n).toString(2) :",5..toString(2))         // formuale 5..toString(2) 


//JS Bitwise  AND (&)Operator
let x= 3 // 32-bit Integer : 0000000000000000000000000000000000011
let y= 6 // 32 -nit Integer: 0000000000000000000000000000000000110
console.log(x&y) // 0011 & 0110 => 0010 = (2^3*0)+(2^2*0)+(2^1*1)+(2^0*0) = 2

//JavaScript Bitwise OR (|)
let x2= 3 // 32-bit Integer : 0000000000000000000000000000000000011
let y2= 6 // 32 -nit Integer: 0000000000000000000000000000000000110
console.log(x2|y2) // 0011 | 0110 => 0111 = (2^3*0)+(2^2*1)+(2^1*1)+(2^0*1) = 0+4+2+1 = 7

// /JavaScript Bitwise XOR
//  Def: returns 1 == bits different: And return 0 == bits are Same
let x3 = 3          // 0011
let y3 = 6          // 0110 
console.log(x3^y3)  // 0101 = 2^3(0)+2^2(1)+2^1(0)+2^0(1) = 0 + 4+ 0+ 1 = 5

//JavaScript Bitwise NOT (~)
// Note: -ve Numbers are represtended in Binary using TWO's Complement
// let x = 5 then ~x = ( 2^32 -(x+1)) = 2^32 -6 => o/p = -6 
/*
    This relates to how negative numbers are represented in binary using the two's complement system. Let's break it down:

Two's Complement:
        In computing, two's complement is the most common method used to represent signed integers in binary.
        Interpreting the Result: 11111111111111111111111111111010
In two's complement:
        The leftmost bit (Most Significant Bit or MSB) is the sign bit.
        1 in the leftmost position indicates a negative number.
        For negative numbers, to find the magnitude, you need to invert all bits and add 1.
*/

let x4=5        //0000000000000000000000000000000101
console.log(~x4) //MSB(1)111111111111111111111111111111010 // 
                //- ( 2^32 -(x+1)) = -6

//JavaScript (Zero Fill) Bitwise Left Shift (<<)
/*
 The Bitwise Left Shift (<<) is a binary operator in JavaScript that shifts the bits of a number to the left. Here's an explanation of how it works:
Basic Concept:
    The left shift operator s+hifts each bit in its first operand to the left by the number of positions specified in the second operand.

WORKS: How it Works:
    It shifts all bits to the left by the specified number of positions.
    New bits on the right are filled with 0s.
    The leftmost bits are discarded.
*/

let x5 = 3 // first operand  // 000000 ... 0011
let y5 = 2 // Second operand 
console.log(x5<<y5)  //      00000000.0011(00) => 0..1100 = 2^3(1)+2^2(1)+0+0 = 8 +4 =12 
//Gereal Formula = x * (2^y)  where x= first operand & y = second operand

/*
It shifts the bits of a number to the right while preserving the sign of the number. Here's a detailed explanation:
Basic Concept:
    This operator shifts each bit in its first operand to the right by the number of positions specified in the second operand.

How it Works:
    It shifts all bits to the right by the specified number of positions.
    The rightmost bits are discarded.
    New bits on the left are filled with copies of the leftmost bit (sign bit).
        This preserves the sign of the number (positive or negative).

We can generate a formula 
    Mathematical Equivalent:
        Right shifting by n is approximately equivalent to dividing by 2^n and rounding down (for positive numbers) or up (for negative numbers):

    +ve num = Math.floor(x/(2^y))     10 >> 1 is 5 (equivalent to Math.floor(10 / 2))  
    -ve num = Math.ceil(x/(2^y))     -10 >> 1 is -5 (equivalent to Math.ceil(-10 / 2))

*/

let x6=3
let y6=1
console.log(x6>>y6)


//JavaScript (Zero Fill) Right Shift (>>>)
/*
    How it works: 
        -> Doesnt preseve the sign  of Number
        -> discard right side by 2nd- oparand count 
        -> adds 0's on the left side 
*/
let x7=5 //0000000000..0101
let y7=1
console.log(x7>>y7) // (0)000000000...010 = 2


