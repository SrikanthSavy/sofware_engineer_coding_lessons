/*
    Delete a node from a tree 
        Corner case : When you are deleting a Node with left child & right Child
            Logic   : we consider closed right child to replace parent node (i.e next node as per "InOrder"-traversal)
            Note    : You could use left closed child too
        Important   : Once we find the closed successor, we move it to parent/root node and delete that successor node from tree
        

*/

class Node
{
    constructor(key)
    {
        this.key=key
        this.left=null
        this.right=null
    }
}

function deleteBST(root,key)
{
    //When root =null
    if(root===null) return null
    // key<root.key , then recursive call and assign to root.left 
    if(root.key>key){
        root.left = deleteBST(root.left,key)
        return root
    }else if(root.key<key){
       root.right = deleteBST(root.right,key)
       return root
    }else{ // // We reach here when root is the node to be deleted.
        if(root.left===null)        //// If one of the children is empty
            return root.right
        else if(root.right===null)  //// If one of the children is empty
            return root.left        
        else{                      /// If both children exist
            
             let succParent = root
             //Finf succesor
             let succ = root.right
             while(succ.left!==null)
            {
                succParent = succ
                succ = succ.left
            }

            // Delete successor. Since successor is always left child of its parent
            // we can safely make successor's right child as left of its parent.
            if(succParent!==null)
                succParent.left = succ.right
            else
                succParent.right = succ.right

            // Copy Successor Data to root
             root.key = succ.key;

            return root;
        }    
    }
}


//Post traversal to see the result (Root,L,R)
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

let root = new Node(40)
root.left= new Node(20)
root.left.right= new Node(30)
root.right= new Node(100)
root.right.left = new Node(70)
root.right.left.left = new Node(60)
root.right.right = new Node(200)
console.log(   `Before Deletion -: ${preOrder(root)}`)

console.log(`Delete 200 from tree:${deleteBST(root,200)}`)
console.log(   `After Deletion: 200 from tree:  ${preOrder(root)}`)

console.log(`Delete 20 from tree:${deleteBST(root,20)}`)
console.log(   `Before Deletion 20  -: ${preOrder(root)}`)

console.log(`Delete 40 from tree:${deleteBST(root,40)}`)
console.log(   `After Deletion : 40 -: ${preOrder(root)}`)
