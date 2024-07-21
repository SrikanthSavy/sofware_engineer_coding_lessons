/*
    LOGIC: Need to maintain 2 pointer "Front" & "Rear" pointing to head & last node
        Insertion : enqueue(data)=> Add a new Node to "rear" and move "rear to this new Node"
        Deletion  : dequeue()   => Move front -> front.next 
        sizeOfList()    : Maintain a class variable "sizeOfList"
        getFront(): return front.data
        getRear() : return rear.data
*/


class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {

    constructor() {
        this.front = null
        this.rear = null
        this.sizeOfList = 0
    }

    enqueue(data) {
        let newNode = new Node(data)
        if (this.sizeOfList === 0) {
            this.front = newNode
         } else {
            this.rear.next = newNode // Move current-rear-next-> newNode
        }
        
        this.rear = newNode  // alway occur , when you add a newNode.i.e  rear->newNode
        this.sizeOfList += 1       //sizeOfList increased
    }

    dequeue() {
        if (this.sizeOfList === 0) return null

        let toDelete = this.front.data
        this.front = this.front.next
        this.sizeOfList -= 1

        return toDelete
    }

    getFront() {
        if (this.sizeOfList === 0) return null
        return this.front.data
    }

    getRear() {
        if (this.sizeOfList === 0) return null
        return this.rear.data
    }
    isEmpty() {
        return (this.sizeOfList === 0)
    }

    size()
    {
        return this.sizeOfList
    }
}


let queue= new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(`Front=${queue.getFront()}`)  //OP: Front= 10
console.log(`Rear=${queue.getRear()}`)    //OP: Rear = 40
console.log(queue)  

console.log(`Dequeue of Queue =${queue.dequeue()}`) //OP:   10
console.log(`Front=${queue.getFront()}`)            //OP:   Front=20
console.log(`Rear=${queue.getRear()}`)              //op:   Rear =40

queue.enqueue(50)
console.log(queue)
console.log(`Front=${queue.getFront()}`)            //OP: Front =20
console.log(`Rear=${queue.getRear()}`)              //Op: Rear = 50
queue.enqueue(60)                      
console.log(`Front=${queue.getFront()}`)           //OP: Front =20
console.log(`Rear=${queue.getRear()}`)             //OP: Rear =60
console.log(queue)


// Note: Time Complexity for all operation is O(1) 