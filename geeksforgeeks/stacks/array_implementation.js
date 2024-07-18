/*
Note: Implementing Stack using Arrays can be done in 2 ways
 -> Insert/Delete item from the "FRONT" of an array (use shift(),unshift()) == Costly as we need to shift items for every add/delete
 -> Insert/Delete from the "END" of Array, easy to implement as array gives push() & pop() [Recommended]
*/

let stack =[]
stack.push(10)
stack.push(20)
console.log(stack.pop()) //pop()
stack.push(30)  //push
console.log(stack.length-1) //size()
console.log(stack[stack.length-1]) //peek()