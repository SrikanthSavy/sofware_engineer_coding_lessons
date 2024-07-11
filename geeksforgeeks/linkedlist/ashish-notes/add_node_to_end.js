//Add a Node at the end
//For example if the given Linked List is 5->10->15->20->25 and we add an item 30 at the end, then the Linked List becomes 5->10->15->20->25->30. 
//Since a Linked List is typically represented by the head of it, we have to traverse the list till the end and then change the next to last node to a new node.
 
class Node {
    
    constructor()
    {
        this.value
        this.next=null
    }

    setter(value)
    {
        this.value=value
    }
}

//Adding a Node at the End of List // Note
function addNodeAtEnd(head,newValue)
{
    let newLastNode = new Node()
    newLastNode.setter(newValue)
    newLastNode.next=null

    let lastNode = head   // Note : Head address is copied to lastNode i.e. if you change anything on lastNode, it will reflect on Head too!
    while(lastNode.next!==null)
        lastNode=lastNode.next  

    lastNode.next=newLastNode

    return head
}

//printing list
function printList(head)
{
    let str=""
    while(head!==null)
    {
        str += head.value+ " "
        head=head.next
    }

    console.log(`List value :${str}`)
}

let head = new Node()
head.setter(30)
head.next= new Node()
head.next.setter(40)
//or
head.next.next= new Node()
head.next.next.value=50
head.next.next.next=null

printList(head)
addNodeAtEnd(head,60)
printList(head)
addNodeAtEnd(head,70)
printList(head)