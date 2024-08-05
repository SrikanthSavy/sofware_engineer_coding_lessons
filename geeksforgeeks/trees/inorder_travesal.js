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

//Tree Travesal : In-Order Traversal (L,Root,R)
//Recursive ( Mostly for trees)
function inOrder(root)
{
    let res = ""

    if(root!==null)
    {
        res += inOrder(root.left)
        res += root.key + " "
        res += inOrder(root.right)
    }
    return res
}


console.log(   `In Order Traversal (L,Root,R): ${inOrder(root)}`)


// Time Complexity : O(n)  
/*  The function visits each node exactly once. At each node, it performs a constant amount of work:
        Checking if the node is null
        Concatenating strings
        Accessing left and right children
    The recursive calls ensure that every node in the tree is visited. i.e n-Nodes
*/

// Space Complexity : O(h) i.e height of the tree   
/*
    This is due to the recursive call stack. 
    In the worst case (a completely unbalanced tree), h could be equal to n, making the space complexity O(n). 
    In a balanced tree, h would be log(n), making the space complexity O(log n).
*/