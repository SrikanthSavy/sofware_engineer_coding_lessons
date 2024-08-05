// Problem: Given a binary tree, the task is to find the height of the tree. 
// Height of the tree is the number of edges in the tree from the root to the deepest node, Height of the empty tree is 0.

/*
    Hint: Recursively calculate height of left and right subtrees of a node and assign height to the node as max of the heights of two children plus 1. See below pseudo code and program for details.
        eg: maxDepth(‘1’) = max(maxDepth(‘2’), maxDepth(‘3’)) + 1 = 2 + 1
*/

/*
    Implementation :
    Follow the below steps to Implement the idea:
        -> Recursively do a Depth-first search.
        -> If the tree is empty then return -1
        Otherwise, do the following
        -> Get the max depth of the left subtree recursively  i.e. call maxDepth( tree->left-subtree)
        -> Get the max depth of the right subtree recursively  i.e. call maxDepth( tree->right-subtree)
        -> Get the max of max depths of left and right subtrees and add 1 to it for the current node.
                max_depth = max(max dept of left subtree,  max depth of right subtree) + 1
        -> Return max_depth.
*/

class Node{
    constructor(key)
    {
        this.key   =  key
        this.left  = null
        this.right = null
    }
}

// Height of a given Node 
function heightofnode(root)
{
    if(root===null)
        return -1     
    
    let leftheight =  heightofnode(root.left)
    let rightHeight= heightofnode(root.right)
    let height =  (1+ Math.max(leftheight,rightHeight))
    return height
}


// creating a Tree 
let root = new Node(10)
root.left = new Node(20)
root.right= new Node(30)
root.right.left = new Node(40)
root.right.right= new Node(50)

console.log(Math.max(-1,-1))
console.log(` Hieght of root(10) : ${heightofnode(root)}`)

