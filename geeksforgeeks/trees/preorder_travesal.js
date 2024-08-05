//How Node is in aTree

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

//Tree Travesal : Pre-Order Traversal (Root,L,R)
//Recursive ( Mostly for trees)
function preOrder(root)
{
    let res = ""

    if(root!==null)
    {       
        res += root.key + " "
        res += preOrder(root.left)
        res += preOrder(root.right)
    }
    return res
}


console.log(   `Pre Order Traversal (Root,L,R): ${preOrder(root)}`)
