//check a give string is palindrome or not
let name ='abbcbba'
let name2= 'abcd'


function isPalindromeRecursive(str,start,end)
{
    if(str[start]>=str[end])  //Base case to comeout
        return true

    return (str[start]===str[end]  && isPalindromeRecursive(str,start+1,end-1)) 
    /* if(str[start]===str[end] )
            isPalindromeRecursive(str,start+1,end-1)
        else
            return false
    */
}



function isPalindrome(name)
{
    let start=0
    let end= name.length-1
    while(start<end)
    {
        if(name[start]===name[end])
        {
            start++
            end--
        }else
            return false            
    }

    return true
}
console.log(isPalindromeRecursive(name,0,name.length-1))
console.log(isPalindromeRecursive(name2,0,name2.length-1))

// console.log(isPalindrome(name))
// console.log(isPalindrome(name2))
