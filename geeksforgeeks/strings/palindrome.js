//brute force or Naive Method
// Split the String as Array and revese it and compare

function isPal(s)
{
    let reverseArray = s.split('').reverse()   // Split the String as Array [] i.e [A,B,C,D,C,B,A]
    let reversedString = reverseArray.join('') // Join the array back into a string without separators i.e ABCDCBA
   
    return (reversedString=== s)
}  
//Time COmplexity   : @(n) // we split the String one char at a time . n= length of the Array or String
//Aux Space         : @(n)
console.log(`Naive Method : ${isPal("ABCDCBA")}`)




let s = "ABCDDCBA"
function isPalindrome(s) 
{
    let isPalindrome = true
    let length = s.length-1

    for(let i=0;i<Math.ceil(length/2);i++)
    {
        if(s.charCodeAt(i)!==s.charCodeAt(length-i))
        {
            isPalindrome=false
            return isPalindrome
        }
   }
   return isPalindrome
}
//TIme Complexity :  O(n/2) => O(n)
//Space  COmplexity: O(1)

console.log(`Given String is Palindrome: ${isPalindrome(s)}`)



