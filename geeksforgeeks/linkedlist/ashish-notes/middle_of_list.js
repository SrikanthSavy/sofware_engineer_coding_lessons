/*
    Given a singly linked list, find the middle of the linked list. For example, if the given linked list is 1->2->3->4->5 then the output should be 3. 
If there are even nodes, then there would be two middle nodes, we need to print the second middle element. For example, if the given linked list is 1->2->3->4->5->6 then the output should be 4. 
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

//Printing the Middle value in the gicen List
function findMiddleofList(head) {
    if (head == null)
        return 0
    let curr = head
    let count = 0
    while (curr !== null) // Countung the Nodes
    {
        console.log(curr.data)
        count += 1
        curr = curr.next
    }
    console.log(`Count = ${count}`)

    let temp = head
    for (let i = 0; i < count / 2; i++)  // Printing Middle term
        temp = temp.next

    console.log(`Middle value is : ${temp.data}`)
    return temp.data
}
/*
Time Complexity: O(n) where n is no of nodes in linked list
Auxiliary Space: O(1)
*/


//GeeksforGeeks Code : will return: data (middle)
function printMiddle(head) {
    if (head == null)
        return 0
    let count = 0
    let curr
    //counting the nodes
    for (curr = head; curr !== null; curr = curr.next)
        count++
    //for printing the middle term
    curr = head
    for (let i = 0; i < count / 2; i++)
        curr = curr.next

    return curr.data
}/*
Time Complexity: O(n) where n is no of nodes in linked list
Auxiliary Space: O(1)
*/

//NAive Methos to handle this problem
//Method 2: Traverse linked list using two-pointers. Move one pointer by one and the other pointers by two. //
//When the fast pointer reaches the end, the slow pointer will reach the middle of the linked list.

function middleofListNaive(head) 
{
    if(head==null)
        return
    let fast_pointer=head;
    let slow_pointer=head;
    //  We will check Fastptr current=value and next value
    //If any of it ==null. come out of loop
    while(fast_pointer!==null && fast_pointer.next!==null) // 
    {
        slow_pointer=slow_pointer.next
        fast_pointer=fast_pointer.next.next
    }

    return slow_pointer.data

}

/*
Time Complexity: O(N), As we are traversing the list only once.
Auxiliary Space: O(1), As constant extra space is used.
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

findMiddleofList(head)
console.log(` middle of list from gfg code:${printMiddle(head)}`)