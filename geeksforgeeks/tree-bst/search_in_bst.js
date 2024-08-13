// Search in a BST 
// Hint : Use BST properties 1) All are distinct 2) Left key <root<right keys

class Node{
    constructor(key)
    {
        this.key = key
        this.left=null
        this.right=null
    }
}
//Recursive Search  Time Complexity  = O(h)  and Aux SPace  = O(h)
function searchBST(root,key)
{
    if(root===null)
        return false
    else if(root.key===key)
        return true

    if(root.key>key)
      return  searchBST(root.left,key)
    else if(root.key<key)
       return searchBST(root.right,key)
}

//Iterative Time Complexity  = O(h)  and Aux SPace  = O(1)
function searchBSTIterative(root,key)
{
    while(root!==null)
    {
        if(root.key===key)
            return true
        else if(root.key<key)
            root=root.right
        else if(root.key>key)
            root=root.left
    }
    return false
}


let root= new Node(10)
root.left = new Node(5)
root.right = new Node(15)
root.right.left = new Node(12)
root.right.right = new Node(18)


//Search 20 
let searchNo =15
//searchBST(root,searchNo)
console.log( `Recursive SearchNo in the BST : ${searchBST(root,searchNo)}`)
console.log( `Itrrative SearchNo in the BST : ${searchBSTIterative(root,searchNo)}`)
