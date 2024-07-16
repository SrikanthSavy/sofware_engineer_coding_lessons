/*
Given a pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing the links between nodes.

Examples: 
Input: Head of following linked list 
1->2->3->4->NULL 
Output: Linked list should be changed to, 
4->3->2->1->NULL

*/
class Node {
    constructor() {
        this.data;
        this.next = null
    }
    setter(data) {
        this.data = data
    }
}
function printMyList(head) {
    if (head == null)
        return
    let curr = head
    while (curr !== null) {
        console.log(curr.data)
        curr = curr.next
    }
}

function printList(head) {
    let curr=head;
    let string = " ";
    while(curr!==null){ // Base case : Last Node will be null
        string += curr.data + " ";
        curr=curr.next;  // Moving current = next node
    }
    return string;
}

//Function to reverser - Hint : Use Arrays to store all the list and then pop()-removes last element to each node 
function reverseListUsingArray(head)
{
    if(head===null)
        return -1

    let array=[]
    let curr
    for(curr=head;curr!==null;curr=curr.next)
        array.push(curr.data)

    console.log(array)
    curr=head
    while(array.length-1>=0)
    {
        curr.data = array.pop()
        curr=curr.next
    }

    return head
}  
//Time Complexity O(2n) => O(n)
//Space Complexity          O(n)  --> n - values sstored in array
 
//Naive Approach- Using 3 -Pointer  prev,curr,next ******
//Initailly prev=null , curr=head , next = null
/* 
    Sol: Follow the steps below to solve the problem:
->Initialize three pointers prev as NULL, curr as head, and next as NULL.
->Iterate through the linked list. In a loop, do the following:
    -->Before changing the next of curr, store the next node 
            next = curr -> next
    -->Now update the next pointer of curr to the prev 
            curr -> next = prev 
    -->Update prev as curr and curr as next 
            prev = curr 
            curr = next
*/

function reverseUsing3Pointer(head)
{
    //check null condition
    let prev=null
    let curr = head
    while(curr!==null)
    {
        let next        = curr.next //Before changing the next of curr, store the next node  in "next"
        curr.next   = prev      //Now update the next pointer of curr = prev 
        prev        = curr      //Update prev as curr and curr as next 
        curr        = next
    }

    return prev  // Previous will be pointing to last node, which we will make as head
}

//Time COmplexity O(n)
//Space Complexity O(1) 


let head = new Node()
head.setter(10)
head.next = new Node()
head.next.setter(20)
head.next.next = new Node()
head.next.next.setter(30)
head.next.next.next = new Node()
head.next.next.next.setter(40)
head.next.next.next.next = new Node()
head.next.next.next.next.setter(50)

console.log(` List before reverser: ${printList(head)}`) 

head = reverseListUsingArray(head)
console.log(` List After reverser: ${printList(head)}`) 
console.log("=========================Using 3 Pointer method")
console.log(` List before reverser: ${printList(head)}`) 
head = reverseUsing3Pointer(head)
console.log(` List After reverser: ${printList(head)}`) 

