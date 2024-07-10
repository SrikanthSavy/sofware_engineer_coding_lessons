class Node{
   constructor(data)
   {
    this.data=data
    this.next = null
   }

}

const node1 = new Node(10)
const node2 = new Node(20)
const node3 = new Node(30)
console.log(node1)

let headNode = node1
headNode.next=node2
node2.next=node3
console.log(headNode)


