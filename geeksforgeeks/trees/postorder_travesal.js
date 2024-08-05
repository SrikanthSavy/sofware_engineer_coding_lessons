//Node of Tree
class Node {
    constructor(key)
    {
        this.key = key
        this.left= null
        this.right=null
    }
}
//Build a Tree
let root = new Node(10)
root.left = new Node(20)
root.right= new Node(30)
root.right.left = new Node(40)
root.right.right= new Node(50)

//Tree Travesal: Post-Order Traversal (L,R,Root)
function postOrder(root)
{
    let res = ""
    if(root !== null)
    {
        res += postOrder(root.left)
        res += postOrder(root.right)
        res += root.key + ","
    }
    return res
}

console.log(`Post Order Traversal: ${postOrder(root)}`)