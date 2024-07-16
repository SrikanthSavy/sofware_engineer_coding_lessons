/*
Given a Linked List and a number N, write a function that returns the value at the Nth node from the end of the Linked List.
nput: 1 -> 2 -> 3 -> 4, N = 3
Output: 2
Input: 35 -> 15 -> 4 -> 20, N = 4
Output: 35  
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

function printList(head) {
    if (head == null)
        return
    let curr = head
    while (curr !== null) {
        console.log(curr.data)
        curr = curr.next
    }
}

// Logic is find Length of list- say count then , we need is  (count- n)th elemnt
function nthItemFromEnd(head, n) {
    if (head === null)
        return -1

    let count = 0
    let curr
    for (curr = head; curr !== null; curr = curr.next)
        count++

    curr = head
    for (let i = 0; i < (count - n); i++)
        curr = curr.next

    return curr.data
}

/*
    Time Complexity = O(N)  list size
    Space Complexity = O(1)

*/
//NEW LOGIC using 2-POINTERS
//start 2-ptr from nth-element(till end)
//now from nth element ptr2++ , then ptr1++ . END : ptr1.data -> will give you the nthelement from last node
function nthItemFromEnd2Pointer(head, n) {
    if (head === null)
        return -1
    let ptr1 = head
    let ptr2 = head

    for (let i = 1; ptr2 !== null; i++) {
        ptr2 = ptr2.next
        if (i > n)
            ptr1 = ptr1.next

    }
    return ptr1.data
}
/*
Time Complexity: O(M) where M is the length of the linked list.
Auxiliary Space: O(1)
*/
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
printList(head)

console.log(`3th- element is =${nthItemFromEnd(head, 3)}`)
console.log(`4th- element is =${nthItemFromEnd(head, 4)}`)
console.log(`4th- element is =${nthItemFromEnd2Pointer(head, 4)}`)
console.log(`3th- element is =${nthItemFromEnd2Pointer(head, 3)}`)