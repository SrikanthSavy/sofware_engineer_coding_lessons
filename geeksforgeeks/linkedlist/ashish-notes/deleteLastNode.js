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

function printlist(head)
{
    if(head===null)
        return

    console.log(head.data)
    printlist(head.next)
}


function deleteLastNode(head)
{
    if(head===null) // When List is empty 
        return false

    if(head.next===null) // When Linkedlist has only 1 element
    {   
        delete(head)
        return null
    }

    let curr= head
    while(curr.next.next!==null) 
        curr=curr.next
    
    console.log(`Deleted Node ${curr.next.data} is : ${delete(curr.next)}`)    
    curr.next=null
  
    return head
}

//Time Complexity O(n) : travesral till the end
//Space Complexity O(1): No extra space required (const)


let head = new Node()
head.setter(50)
head.next= new Node()
head.next.setter(40)
head.next.next=new Node()
head.next.next.setter(30)
head.next.next.next=new Node()
head.next.next.next.setter(20)
head.next.next.next.next=new Node()
head.next.next.next.next.setter(10)
printlist(head)
head= deleteLastNode(head)
printlist(head)


