class Node
{
    constructor()
    {
        this.value;
        this.next=null
    }

    setter(value)
    {
        this.value=value
    }
}
//Traveseal of the linkdlist
function printList(headNode)
{
    let result= ""
    while(headNode!==null)
    {
        result += headNode.value + "  "
        headNode=headNode.next
    }

    console.log(result)
}

//Adding a Node at the begining 
function addNodeAtFront(headNode,value)
{
    let newHead= new Node()
    newHead.setter(value)
    newHead.next=headNode

    return newHead
}

let head= new Node()
head.setter(20)
head.next=new Node()
head.next.setter(30)
head.next.next=new Node()
head.next.next.setter(40)
head.next.next.next=null

printList(head)
head = addNodeAtFront(head,10)
printList(head)
head = addNodeAtFront(head,5)
printList(head)





