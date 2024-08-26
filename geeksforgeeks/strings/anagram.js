/*
    Anagram : Given 2 strings 
      : Both should have same char, with same no of times , though order can be anyway.

      eg: s1="listen"  s2= "silten"   o/p : True
      eg: s1= "aaabc"  s2 = "abaca"  o/p= true
      eg: s1="aab"     s2="bba"   o/p: false

*/
//Naive method is to sort the string and then compare it 
function anagram(s1,s2)
{
     if(s1.length!==s2.length)
        return false;
     else{
        let s1Array = s1.split("").sort() // return an array
        let s2Array = s2.split("").sort() // return an array
        
        for(let i=0;i<s1Array.length;i++)
        {
            if(s1Array[i]!==s2Array[i])
                return false
        }
        return true
     }
}  //Time Complexity :   O(nlogn)   for sorting  + O(n) for linear comparison


//Naive method is to sort the string and then compare it 
function anagramGfg(s1,s2)
{
     if(s1.length!==s2.length)
        return false;
     else{
        let s1New = s1.split("").sort().join("") // return an array, then joins them as String - finally return a String
        let s2New = s2.split("").sort().join("") //  return an array, then joins them as String - finally return a String
        return (s1New===s2New)
     }
}  //Time Complexity :   O(nlogn)   for sorting  + O(n) for linear comparison

 
/* Liner time logic : 
    We create an array of 256 char [Since we are considering all char 2^8] 
    -> Assign 0 to all posiition
    now( we loop through s1 & s2 ( as both should have same length to start with) )
        -> increment "Ascii code posiiton in Array for s1"
        --> Decrement "Ascii code posiiton in Array for s2"

    Finally if its Zero , then we have Anagram , else not

*/

function anagramLinear(s1,s2)
{
    if(s1.length!==s2.length)
        return false
    //create an 0-filled Array of size (256)
    let counterArray = new Array(256).fill(0) 

    //Loop through each element in both s1 And S2 , as length should be same
    for(let i=0;i<s1.length;i++)                                                        //Time Complexity here: O(n) where n = stringlength
    {
        counterArray[s1.charCodeAt(i)]++  // Increment CounterArray at s1. char -Code : ++
        counterArray[s2.charCodeAt(i)]--  // Decrement CounterArray at s2- char -Code : --
    }

    //finally if counterArray has all 0's then we have Anagram                          // Time Complexity Here is : O(256) => O(1)
    for(let j=0;j<counterArray.length;j++)
    {
        if(counterArray[j]!==0)
            return false
    }

    return true
} //Time COmplexity :  @(n) +@(1) ==> @(n)
  //Space Complexity : @(1)



let s1="aabadcb"
let s2="abcdaab"

console.log(`Anagram os s1&s2 :${anagram(s1,s2)}`)
console.log(`AnagramGFG os s1&s2 :${anagramGfg(s1,s2)}`)

console.log(`Anagramlinear os s1&s2 :${anagramGfg(s1,s2)}`)


