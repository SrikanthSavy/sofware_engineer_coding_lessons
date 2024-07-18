//Balanced Paranthesis problem ( Only Stack is easy to solve this problem)
/*
    Note: Only allowed paranthesis are (,{,[,],},)
    Logic: write afunction() which we do this when it encounters
    1) Opening bracket -> push() it to stack
    2) Closing bracket -> pop() element and compare it - ok - continue till the end of stack 

*/

// Will write the logic , and to test we will use Array implemented STACK

const string1 = "([])"
const string2 = "((())"
const string3 = "([())]"


function validateParanthesis(string)
{   
    let myStack = []

    for( let char of string)
    {
       if(char === '(' || char === '{' || char === '[')  // Handling Opening paranthesis
        {
            myStack.push(char)
       
        }else if(char === ')' || char === '}' || char === ']') // Handling closing Paranthesis
        {
            //check length of stack
            if(myStack.length===0) return false
    
            let top = myStack.pop()     // comparing top element from Stack
            if(char===')' && top!=='(' || char==='}' && top!=='{' ||char===']' && top!=='[')
                return false
        }
    }
    console.log(`size of stack : ${myStack.length}`)
    return (myStack.length===0) //return TRUE , only when after all the elem in STRing , then stack.length===0  else some items are still avilavle

}

console.log(` ([]) is balnced =${validateParanthesis(string1)}`)
console.log(` ((())) is balnced =${validateParanthesis(string2)}`)
console.log(` ([)] is balnced =${validateParanthesis(string3)}`)
