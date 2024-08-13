// 2 cases : 1) when tree is Empty 
//           2) When tree is Non Epty

class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right= null
    }
} 
// Inser 20 // Recursive  Tome Complexity = O(h)  and Space Complexity = O(h)  -- Stack required to store function call
function insert(root,key)
{
    if(root===null)
       return new Node(key)

    if(root.key===key)
        return root

    if(root.key>key)
    {
        root.left =insert(root.left,key)  //  "root.left =" These lines are important : As this will create a Link with new Node ()
    }else{
        root.right = insert(root.right,key) //"root.right=" These lines are important : As this will create a Link with new Node ()
    }

    return root
}


// Iterative  LOGIC: We need 2 temp var= to hold current(temp) and Parent( parent)   : Tome Com[plexity = O(h)]  and Space Complexity = O(1)
//==========

function insertBST(root,key)
{
    let temp = root
    let parent = null  // Will Hold the Final Node or Previous Node ( where we need to Insert) based on 3 cases i.e Parent==key or >key or <key
    while(temp!==null)
    {
        parent=temp
        if(temp.key === key)
            return root
        else if(temp.key<key)
            temp=temp.right
        else if(temp.key>key)
            temp=temp.left
        
    }
    //Where to insert on parent side i.e left or right or on it
    if(parent===null) // general case covers outside edge condition
        return new Node(key)
    else if(parent.key>key)
        parent.left= new Node(key)
    else 
        parent.right= new Node(key)

    return root
}


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

let root= new Node(10)
root.left = new Node(5)
root.right = new Node(15)
root.right.left = new Node(12)
root.right.right = new Node(18)

root =insertBST(root,20)
//root =insert(root,20)
console.log(`New List ${treeSize(root)}`)
console.log(`New List ${inOrder(root)}`)

