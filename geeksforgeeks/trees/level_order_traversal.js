/*
We have seen the three basic traversals(Preorder, postorder, and Inorder) of a Binary Tree. We can also traverse a Binary Tree using the Level Order Traversal. 
In the Level Order Traversal, the binary tree is traversed level-wise starting from the first to last level sequentially. 

*/

/*
    Hint: Use a QUEUE to store root value a
    And finally pop - values out of that queue -root elements
*/

// Implementing a Queue using Arrays

class Queue{
    

    constructor(cap)
    {
        this.cap=cap
        this.qArray = new Array(cap)
        this.front= 0
        this.size = 0
    }

    getFront()
    {      //Null check
        if(this.size===0)return null

        //return this.front  // returns index(front) , if you need value then return "this.qArray[this.front]"
        return this.qArray[this.front]
    }

    getRear() // we use a formula to get "rear" from "front & size " variable
    {       //null check
            if(this.size===0)return null
            let rear = (this.front+this.size-1)%this.cap  // (front+size-1)%cap

            return rear  // current Index of rear
    }

    enqueue(x)
    {
        //queue is full -> all the nodes are full for given Cap=4 
        if(this.size===this.cap)return `${x} :cannot be inserted`

        let rear = (this.front+this.size-1)%this.cap // calculate the current index rear
        //next position of rear to Insert
        rear = (rear+1)%this.cap    // Circular Array , we can get empty spots in the front too : Next position of "rear"
        this.qArray[rear]=x         // push value at "rear"
        this.size++                 // Increase the size
    }

    dequeue()
    {
        //null check
        if(this.size===0)return null

        let dataToDelete = this.qArray[this.front] //fetch the data to Delete
        this.front = (this.front+1)%this.cap        // next position of Front
        this.size--
        return dataToDelete
    }

    isEmpty()
    {
        return (this.size===0)
    }

    size()
    {
        return this.size
    }
}

class Node {

    constructor(key) // key= nothing but Value sstored on the Node
    {
        this.key = key
        this.left = null
        this.right= null
    }
}


// creating a Tree 
let root = new Node(10)
root.left = new Node(20)
root.right= new Node(30)
root.right.left = new Node(40)
root.right.right= new Node(50)

console.log(" Level Order: "+ levelOrder(root))

function levelOrder(root)
{
    let ans = ""
    if(root===null)
        return ans

    let queue = new Queue(100)
    queue.enqueue(root)

    while(queue.size>0)
    {
        let curr = queue.getFront()
        queue.dequeue()
        ans += curr.key+ " "

        if(curr.left!==null) queue.enqueue(curr.left)
        if(curr.right!==null) queue.enqueue(curr.right)    

    }

    return ans

}


