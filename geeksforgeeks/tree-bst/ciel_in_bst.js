// Find a ceil in BST for a given key
/*Example if key=14, we need to find (element > key), but minimum value on left of key.
        10
        / \
       5   15             O/P = 15  i.e 12<key , but its the min value , which is greater then key
           / \
          12  30

*/

class Node
{
    constructor(key)
    {
        this.key=key
        this.left  = null
        this.right = null
    }
}

let root = new Node(10)
root.left = new Node(5)
root.right = new Node(15)
root.right.left = new Node(12)
root.right.left.right = new Node(13)
root.right.right = new Node(30)


function cielBSTIterative(root,key)
{
    let ciel = null
    while(root!==null )
    {      
        if(root.key===key)
            return ciel
        else if(root.key>key)   // When root >key, we traverse left . But, before that we save root value == ciel
        {
            ciel = root.key // we save ciel value = root, before mving left
            root=root.left
        }else if(root.key<key) 
            root=root.right
    }
    return ciel
}




let key = 14
console.log(cielBSTIterative(root,key))