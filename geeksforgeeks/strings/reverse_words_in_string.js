/*
    Problem : Reverse All the words in a given String

    eg : I/P = Hello World, Shoda!
         O/P = Shoda! ,World Hello



*/
//Explaination : 
          
//My own way   
function reverseWord(s)
{
    count=s.length
    let s_new=""
    for(let i=s.length-1;i>=0;i--)
    {
        if(s.charCodeAt(i)===32)
        {
            s_new=s_new+s.substring(i,count)
            //console.log(`S_new = ${s_new}`)
            count=i
        }    
    }
 return s_new+" "+s.substring(0,count)
} //Time Complexity = O(n^2) worst case, when there is no spaces
  //Aux Space       = O(n)

  /* A more efficient approach would be to:
        -> Split the string into an array of words.
        -> Reverse the array.
        -> Join the array back into a string. 
        */ // NOTE: Explaination in detail BELOW-------------------
function reverseWordBetter(s) {
    return s.split(' ').reverse().join(' ');
    //# Step explaination
   // let arrays= s.split(' ')
   // let arraysrevser= arrays.reverse()
   // let resultStr = arraysrevser.join(' ')


} // Time Complexity : O(n)
  // Aux Space : O(n)



let s="Hello World! Shoda"
let s1="I Love Coding"
let s2="Hello"

// console.log(`Final Otput S  :${reverseWord(s)}`)        
// console.log(`Final Otput S1 :${reverseWord(s1)}`)        
// console.log(`Final Otput S2 :${reverseWord(s2)}`)        


console.log(`Final Otput S  :${reverseWordBetter(s)}`)        
console.log(`Final Otput S1 :${reverseWordBetter(s1)}`)        
console.log(`Final Otput S2 :${reverseWordBetter(s2)}`)  


/*  EXPLAINATION 
This line uses method chaining to perform three operations in sequence:

s.split(' ')

The split() method is called on the input string s.
It takes a separator as an argument, in this case a space ' '.
This method splits the string into an array of substrings wherever it finds the separator.
For example, if s is "Hello world example", this would produce ["Hello", "world", "example"].


.reverse()

The reverse() method is called on the resulting array from step 1.
This method reverses the order of elements in the array in place.
Continuing our example, this would turn ["Hello", "world", "example"] into ["example", "world", "Hello"].


.join(' ')

The join() method is called on the reversed array.
It takes a separator as an argument, in this case a space ' '.
This method joins all elements of the array into a string, using the specified separator between each element.
In our example, this would produce "example world Hello".



So, in one line, this code:

Splits the input string into words.
Reverses the order of those words.
Joins the words back into a single string.

Time Complexity:

split(): O(n), where n is the length of the string.
reverse(): O(m), where m is the number of words.
join(): O(n), where n is the length of the string.

The overall time complexity is O(n), as splitting and joining dominate and are proportional to the string length.
Space Complexity:
O(n), as we create new data structures (arrays and strings) proportional to the input size.
This method is more efficient than the previous implementation, especially for longer strings with many words, as it avoids the quadratic time complexity of repeated string concatenations.

*/