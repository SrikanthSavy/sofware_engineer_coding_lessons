class Node{
    constructor()
    {
        this.data;
        this.next = null
    }

    setter(data)
    {
        this.data=data
    }
}


//print List
function printLinkedList(head)
{
    let result= ""
    while(head!==null)
    {
        result+= head.data+ " "
        head=head.next
    }

    console.log(`Linked List = ${result}`)
}


// Insert a new Node at given position
/*
Firstly, check if the given previous node is NULL or not.
Then, allocate a new node and
Assign the data to the new node
And then make the next of new node as the next of previous node. 
Finally, move the next of the previous node as a new node.
*/

function insertNodeAtPos(head,data,position)
{
    //New Node creat
    let newNode= new Node()
    newNode.setter(data)
    

    //check if List is empty and position is one
    if(head===null )return newNode

    //if(position == 1 & head!=null)
    if(position===1)
    {
        newNode.next=head
        return newNode
    } 

    //When position >1 and head!==null
    let i=2
    let curr = head
    while(i<position)
    {
        if(curr.next===null)  
            break

        curr=curr.next
        i++
    }

    newNode.next=curr.next
    curr.next = newNode
    return head
}



let head = new Node()
head.setter(30)
head.next= new Node()
head.next.setter(40)
//or
head.next.next= new Node()
head.next.next.setter(50)
head.next.next.next=null

printLinkedList(head)
head=insertNodeAtPos(head,45,3)
printLinkedList(head)

head=insertNodeAtPos(head,60,5)
printLinkedList(head)


head=insertNodeAtPos(head,66,9)
printLinkedList(head)


head= insertNodeAtPos(head,5,1)
printLinkedList(head)
head= insertNodeAtPos(head,1,1)
printLinkedList(head)