// Linked List implementation of Arrays . Need to implment push(x),pop(),peek(),size(),isEmpty()
/* 
    NOTE: You can do it 2-ways Instert/Del from END of List --> O(n) not recommented
          The other approach is from FRONT i.e insert/del- from head --> O(1)
    push(),pop(),peek() are easy 
    size() -> Idea is to maintain a class-variable ,UPDATE it for each push() & pop()
    isEmpty() -> 2 ways 1) size-variable or head==null 
*/

class Node{
    constructor(x)  // This change is req, as we woulf create Node , only on push(x)-call
    {
        this.data=x;
        this.next=null
    }
   /* setter(data) //We dont require a setter() , constructor will handle it
    {
        this.data=data
    }*/  
}
class Stack{

    constructor()
    {
        this.headNode = null
        this.sizeofStack=0
    }

    size()  // Returns the size of a Stack
    {
        return this.sizeofStack
    }

    isEmpty() // Return True/False if the STack is Empty
    {
        // if(this.sizeofStack===0 || this.headNode===null) return true        
        return this.headNode===null
    }
 
     push(data)   // Add a new Node to the Head and make it as Head Node
    {
        let addNode = new Node(data)
        addNode.next= this.headNode
        this.headNode = addNode
        this.sizeofStack +=1
    }
    pop() // Move head to next and return head.data
    {       
        //null check
        if(this.headNode===null)
            return null

        let deletedDate = this.headNode.data
        this.headNode=this.headNode.next
        this.sizeofStack -= 1

        return deletedDate
    }
     isEmpty()
    {
        return (this.headNode===null) // return true if headd==null else false
    }

    peek()
    {
        if(this.headNode===null)
            return null
        return this.headNode.data
    }
}

let myStack = new Stack()
myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.push(40)
console.log(`Size of Stack: ${myStack.size()}`)
console.log(`Peek item : ${myStack.peek()}`)
console.log(`Pop an Element`,myStack.pop())
console.log(`Size of Stack: ${myStack.size()}`)
console.log(`Peek item : ${myStack.peek()}`)
console.log(`Is Stack Empty: ${myStack.isEmpty()}`)










