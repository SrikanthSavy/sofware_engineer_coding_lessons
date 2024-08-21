// Find a floor in BST for a given key
/*Example if key=14, we need to find (element < key), but greatest value on left of key.
        10
        / \
       5   15             O/P = 12  i.e 12<key , but its the max value , which is less then key
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


function floorBSTIterative(root,key)
{
    let floor = null
    while(root!==null )
    {      
        if(root.key===key)
            return floor
        else if(root.key<key) // When root <key, we traverse right . But, before that we save root value == floor
        {
            floor = root.key // // we save floor value = root, before mving right
            root=root.right
        }    
        else if(root.key>key)
            root=root.left
    }
    return floor
}

// Time Complexisty = O(h) , same as BST Search
//Space Complexity = O(1)


let key = 29
console.log(floorBSTIterative(root,key))