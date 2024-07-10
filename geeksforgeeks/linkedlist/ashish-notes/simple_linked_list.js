
class Node{
    constructor()
    {
        this.value;
        this.next=null
    }

    setter(nodeValue)
    {
        this.value=nodeValue
    }
}

//travese a LinkedList
function printList(headNode)
{
    let currentNode=headNode
    let string=""
    while(currentNode!==null)
    {
        string+=currentNode.value+" "
        currentNode=currentNode.next
    }

    return string
}


let headNode = new Node()
headNode.setter(10)
let seconNode = new Node()
seconNode.setter(20)
let thirdNode = new Node()
thirdNode.setter(30)

headNode.next=seconNode
seconNode.next=thirdNode

//console.log(headNode.value+"-->"+seconNode.value+"-->"+thirdNode.value)

console.log(`Travese a Linkedlist:${printList(headNode)}`)