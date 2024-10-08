class Node {
    constructor()
    {
        this.value;
        this.next = null;
    }
 
    setter(nodeValue) {
        this.value = nodeValue;
    }
}

function printlist(head) {
    let curr=head;
    let string = " ";
    while(curr!==null){ // Base case : Last Node will be null
        string += curr.value + " ";
        curr=curr.next;  // Moving current = next node
    }
    return string;
}


let head=new Node();
head.setter(10);
head.next=new Node();
head.next.setter(20);
head.next.next=new Node();
head.next.next.setter(30);
head.next.next.next=new Node();
head.next.next.next.setter(40);
console.log(printlist(head));
