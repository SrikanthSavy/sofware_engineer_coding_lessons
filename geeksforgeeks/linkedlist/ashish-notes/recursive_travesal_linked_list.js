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
    if(headNode===null)
        return

    console.log(headNode.value)
    traveseRecursive(headNode.next)
}


let headNode = new Node()
headNode.setter(10)
headNode.next= new Node()
headNode.next.setter(20)
headNode.next.next= new Node(30)
headNode.next.next.setter(30)

traveseRecursive(headNode)