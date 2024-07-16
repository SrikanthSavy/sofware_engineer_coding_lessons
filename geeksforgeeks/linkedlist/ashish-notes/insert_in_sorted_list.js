// /Sorted Insert in a Singly Linked List
//Given a sorted linked list and a value to insert, write a function to insert the value in a sorted way.
// Initial Linked List SortedLinked List=> 2,5,7,10,15    now inset 9
//?Result should be : 2,5,7,9,10,15 

class Node
{
    constructor()
    {
        this.data;
        this.next=null
    }
    setter(data)
    {
        this.data=data
    }
}

function  printList(head)
{
    if(head==null)
        return 
    let curr = head
    while(curr!==null)
    {
        console.log(curr.data)
        curr=curr.next
    }
}


//Insert function : given list is ascending
function sortedInsert(head,data)
{
    let newNode = new Node()
    newNode.setter(data)
    if(head==null)  // when list is empty
        return newNode    
    
    if(head.data>=data) // When 1st head > data
    {
        newNode.next = head
        return newNode
    }

    // other cases
    let currentNode = head
    while(currentNode.next!==null && currentNode.next.data<=data) // findind the Node , after which the next Node > data
    {
      currentNode= currentNode.next
    }

    newNode.next=currentNode.next
    currentNode.next=newNode

    return head
    
}

//Time Complexity : O(n) 
/*
Complexity Analysis: 

Time Complexity: O(n). 
Only one traversal of the list is needed.
Auxiliary Space: O(1). 
No extra space is needed.
*/
// Space Complexity : O(1)



let head = new Node()
head.setter(10)
head.next= new Node()
head.next.setter(20)
head.next.next=new Node()
head.next.next.setter(30)
head.next.next.next=new Node()
head.next.next.next.setter(40)
head.next.next.next.next=new Node()
head.next.next.next.next.setter(50)

//printList(head)
head = sortedInsert(head,35)
//console.log("==============After=Insertion========")
//printList(head)
head = sortedInsert(head,15)
console.log("==============After=Insertion========")
//printList(head)
head = sortedInsert(head,60)
printList(head)