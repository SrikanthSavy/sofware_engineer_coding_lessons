class Node{
    constructor()
    {
        this.value
        this.next=null
    }

    setter(nodeValue)
    {
        this.value=nodeValue
    }
}

//Recusrive Travesal of a LinkedList
function traveseRecursive(headNode)
{
    if(headNode===null) // Base case HeadNode= last null node
        return

    console.log(headNode.value)  // print value
    traveseRecursive(headNode.next)  // move headNode= next Node
}
// to print side by side
function traveseRecursiveSidebySide(headNode,result)
{
    if(headNode===null)
    {
      
        console.log(`Linked list values=${result}`)
        return
    }
    result += headNode.value +" "
    traveseRecursiveSidebySide(headNode.next,result)
}

let headNode = new Node()
headNode.setter(10)
headNode.next= new Node()
headNode.next.setter(20)
headNode.next.next= new Node(30)
headNode.next.next.setter(30)
let result =""
traveseRecursive(headNode)

traveseRecursiveSidebySide(headNode,result)