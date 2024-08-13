// /Size of a tree is the number of elements present in the tree. 

//Hint: Size() function recursively calculates the size of a tree. It works as follows: Size of a tree = Size of left subtree + 1 + Size of right subtree.

class Node 
{
    constructor(key)
    {
        this.key=key
        this.left=null
        this.right=null
    }
}

// Time Complexity = O(n) & Space Complexity O(n)- stack function calls
function treeSize(root)
{
    let size = 0
    if(root===null)
        return size
    
    size += treeSize(root.left)
    size += 1
    size += treeSize(root.right)

    return size

    //or  return treeSize(root.left)+1+treeSize(root.right)
}

let root= new Node(10)
root.left= new Node(20)
root.right= new Node(30)
root.right.left = new Node(40)
root.right.right = new Node(50)


console.log(`Size of Tree: ${treeSize(root)}`)