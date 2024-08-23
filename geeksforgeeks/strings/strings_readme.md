
Strings DS
==========
-> A String is a "seq of Char"
-> small Set i.e old= 2^7 = 128 
                 new = 2^8 = 256
-> Represtented by ASCII Code 

97  98  99      122 
a   b   c ..... z


65  66 67 ..... 90
A   B  C  ....  Z

Strings in JavaScript
=====================

1) NO 'Char' data -type in JS
2) Typically UTF-16 (like Java i.e large set)
3) You can use 'single quote' or "double quotes"



// Properties of String
========================

1) Array like property s[i] === s.charAt(i)
    let s= "shoda"
    console.log(s[2])           //o/p : o
    console.log(s.charAt(2))    //o/p : o

2) s.length
    console.log(s.length) // o/p: 5

3) s.charCodeAt(i) ->  Returns AscII code a given char at index i
    console.log(s.charCodeAt(2))  //o/p: 111 i.e ASCII code of 'o'

4) s.slice(i,j) --> Give a SubString (i, (j-1))
    console.log(s.slice(0,4))  //o/p : "shod"
