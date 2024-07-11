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

//Delete the First Node
function delete_first_node(head)
{
    //if list is empty
    if(head===null) return null
    let curr = head.next
    delete(head)   /// delete(Node) : will remove the node from the list
    return curr
}  // Time Complexity O(1) and Aux space O(1) i.e const


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


let head = new Node()
head.setter(10)

head.next=new Node()
head.next.data=20

head.next.next=new Node()
head.next.next.data=30

head.next.next.next=new Node()
head.next.next.next.data=40
head.next.next.next.next=null

printLinkedList(head)
head = delete_first_node(head)
printLinkedList(head)



