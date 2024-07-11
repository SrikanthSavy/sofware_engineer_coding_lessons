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

//Search a"key" in a Linked List 
function searchList(head,key)  //Iteratively
{
    let current = head
    while(current!==null)
    {
        if(current.data===key)
            return true
        else
        current = current.next
    }

    return false
}
/*
//GEeks code
function search(head, x){
    let pos=1;
    let curr=head;
    while(curr!==null){
        if(curr.data===x)
            return pos;
        else{
            pos++;
            curr=curr.next;
        }
    }
    return -1;
}

*/

//Search a"key" in a Linked List 
function searchListRecursively(head,key)
{
    if(head===null)
        return false

    if(head.data===key)
        return true
    
    return searchListRecursively(head.next,key)
}

/*
//Geeks Code to return position No:
function search(head, x){
    if(head===null)
        return -1;
    if(head.data===x)
        return 1;
    else{
        let res=search(head.next,x);
        if(res===-1)
            return -1;
        else 
            return res+1;
    }
}
*/

let head = new Node()
head.setter(10)
head.next= new Node()
head.next.setter(15)
head.next.next= new Node()
head.next.next.setter(55)
head.next.next.next= new Node()
head.next.next.next.setter(60)

printLinkedList(head)
let key =15
console.log(`Key =${key} is in the list : ${searchList(head,key)} `) 
console.log(`Key =${key} is in the list Recurisively : ${searchListRecursively(head,key)} `) 