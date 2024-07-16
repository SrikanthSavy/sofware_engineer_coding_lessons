/*
Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once. 
For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60. 

Algorithm: Traverse the list from the head (or start) node. While traversing, compare each node with its next node. 
If the data of the next node is the same as the current node then delete the next node. Before we delete a node, we need to store the next pointer of the node 
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

function removeDuplicates(head)
{
    //null check 
    let curr = head
    while(curr!==null)
    {   // check if next Node exists && data=== next.data
        if(curr.next!==null && curr.data===curr.next.data) 
        {
            let temp = curr.next  // copy duplicatenode-> temp
            curr.next=temp.next   // Move curr Node->next --> duplicateNode->next
            delete(temp)           // delete(duplicateNode) 
        }else{
            curr=curr.next        // If no duplicate, move to next element
        }
    }
    return head

}
/*
Time Complexity: O(n) where n is the number of nodes in the given linked list.
Space Complexity: O(1) , as there is no extra space used.
*/




let head = new Node()
head.setter(11)
head.next = new Node()
head.next.setter(11)
head.next.next = new Node()
head.next.next.setter(11)
head.next.next.next = new Node()
head.next.next.next.setter(21)
head.next.next.next.next = new Node()
head.next.next.next.next.setter(43)
head.next.next.next.next.next = new Node()
head.next.next.next.next.next.setter(43)
head.next.next.next.next.next.next = new Node()
head.next.next.next.next.next.next.setter(60)
head.next.next.next.next.next.next.next = new Node()
head.next.next.next.next.next.next.next.setter(60)
head.next.next.next.next.next.next.next.next = new Node()
head.next.next.next.next.next.next.next.next.setter(60)

console.log(`Before deleting Duplicates: ${printList(head)} `)
head= removeDuplicates(head)
console.log(`After deleting Duplicates: ${printList(head)} `)



function printList(head) {
    let curr=head;
    let string = " ";
    while(curr!==null){ // Base case : Last Node will be null
        string += curr.data + " ";
        curr=curr.next;  // Moving current = next node
    }
    return string;
}
