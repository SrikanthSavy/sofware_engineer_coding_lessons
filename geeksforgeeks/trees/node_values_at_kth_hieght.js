
/*Given a root of a tree, and an integer k. Print all the nodes which are at k distance from root. 
            For example, in the below tree, 4, 5 & 8 are at distance 2 from root. 

                        1
                    /   \
                    2      3
                /  \    /
                4     5  8 
The problem can be solved using recursion. Thanks to eldho for suggesting the solution. 
*/
/*
    LOGIC: 
        -> Always check the K distance == 0 at every node, if true => add that value to "ans"
        -> For both, left and  right subtree – Decrement the distance by 1 i.e k=k-1 and recursively call the function 
*/
class Node {
    constructor(key) // key= nothing but Value sstored on the Node
    {
        this.key = key
        this.left = null
        this.right = null
    }
}

// creating a Tree 
let root = new Node(10)
root.left = new Node(20)
root.right = new Node(30)
root.right.left = new Node(40)
root.right.right = new Node(50)
root.right.right.right = new Node(70);
root.right.right.left = new Node(80);

function printNode(root, k) {
    let ans = ""
    if (root === null)    //--> Important cade 1: if root become ans , then resturn ans
        return ans
    // Break condition

    if (k === 0) // You are at kth distance // Imp case 2 : when k=0 . we need values ta this level
    {
        ans += root.key + ","
    } else {        // Else , k>0, => we need to go deeper
        ans += printNode(root.left, k - 1)
        ans += printNode(root.right, k - 1)
    }

    return ans
}

console.log(printNode(root, 2))