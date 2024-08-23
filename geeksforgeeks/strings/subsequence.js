//I/p: s1 = "ABCD"  s2 ="AD"  o/p = true
//I/p: s1="ABCDE"  s2= "AED"  0/p = false

//Logic: Use 2-pointer pattern
/*       i
         |
    s1 = A   B   C  D  E
    s2 = A   E   D 
         |
         j        
if(s1[i]==s2[j]) {i++, j++}
else {i++}
Note: If we reach end of s2 , then return true
    if we reach end of s1= return false
*/
let s1 ="ABCDE"
let s2 = "AE"
function subSequence(s1,s2)
{
    let i=0,j=0

    while(i<s1.length && j<s2.length)
    {
        if(s1.charCodeAt(i)===s2.charCodeAt(j))
        {
            i++;
            j++;
        }else{
            i++;
        }
        //When we reach to the end of s2 ==> its a subseq
        if(j===s2.length)
            return true
    }
    return false
}
//Time Complexity   = @(m+n)  m= length of first String n= length of 2 string
//Aux Space         = O(1)

console.log(`2- Pointer logic sunseq :${subSequence(s1,s2)}`)


///
////Geeksfor Geeks Logic : Iterative solution
////

function isSubSeqGeeks(s1,s2)
{
    let j=0 
    for(let i=0;i<s1.length;i++)
    {
        if(s1[i]===s2[j])
            j++
    }
    return (j===s2.length)
}//Time Complexity   = @(m+n)  m= length of first String n= length of 2 string
//Aux Space         = O(1)


//Recurisive Solution // Note: compare from backward i.e from length ... 2,1,0 
function isSubSeqGeeksResucrsive(s1,s2,m,n)
{
    if(n===0) return true // when you reach ends of second string
    if(m===0) return false // whne you have reached end of first Strinf
    if(s1[m-1]===s2[n-1])
        return isSubSeqGeeksResucrsive(s1,s2,m-1,n-1)  // decrement i, & j
    else
        return isSubSeqGeeksResucrsive(s1,s2,m-1,n)    // decrement only i
}
//Time Complex  = O(m+n)
//Aux Space     = O(m+n)  -- Stack Calls 

console.log(`Recursive subseq: ${isSubSeqGeeksResucrsive(s1,s2,s1.length,s2.length)}`)



















//Brute Force Method
function subsquence(s1,s2)
{
    let seq = false
    let j=0
    for(let i=0;i<s2.length;i++)
    {   
        for( ;j<s1.length;j++)
        {
            if(s2.charCodeAt(i)===s1.charCodeAt(j))
            {
                if(i===s2.length-1)
                    return true
                j++;
                break
            }
        }
    }
    return seq
}



console.log(`Seq os String : ${subsquence(s1,s2)}`)
