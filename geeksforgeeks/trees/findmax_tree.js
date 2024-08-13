//Given a Binary Tree, find the maximum(or minimum) element in it. For example, maximum in the following Binary Tree is 9.
// Note: IN  "Binary Tree" , we must visit every node to figure out maximum. 
// In "Binary Searh Tree", we can travese through right pointer until we reach righmost pointer

/*          if(root=null) return 0
    Hint:  Math.max(root.key,getMax(root.left),getMax(root.right))

*/

class Node{
    constructor(key)
    {
        this.key=key
        this.left=null
        this.right=null
    }
}

function getMax(root)
{
    if(root===null)
        return -1e9
    return Math.max(root.key,getMax(root.left),getMax(root.right))
}

/*
    TIme Complexity : O(n) // we traverse through all the Nodes
    Space Complexity: O(n) // Stacl operations 

*/


let root = new Node(10);
root.left = new Node(20);
root.right= new Node(30);
root.left.left = new Node(40);
root.left.right= new Node(50);
root.right.right = new Node(70);
root.right.right.right = new Node(80);

console.log(getMax(root))