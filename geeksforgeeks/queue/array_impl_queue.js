/*
    Queue implementation  ( 2 ways to implement with Arrays)
        Array           ---> time complexity !== O(1) for all Operations of Queue
        Circular Array  ---> time complexity ===(1)   for all Operations of Queue
*/

// NOTE: We use only Circular Array to imple Queue 
// Assumption Size of Queue is know at the start - for Circular Array

/*
    LOGIC:  Fromt = Index(item to remove)
            Rear  = Index(last added element)

      enqueue(x) => front= (front+1)%cap(size)
      dequeue(x) =>  rear = (rear+1)%cap          
*/
// Queue class variable = cap(size) , qArray, front , size(current elements in queue)
//NOTE: we are not using "rear" , since we can calculate it on the fly ******* ((front+size)-1)%cap

class Queue{

    constructor(cap)
    {
        this.cap=cap
        this.qArray = new Array(cap)
        this.front= 0
        this.size = 0
    }

    getFront()
    {      //Null check
        if(this.size===0)return null

        return this.front  // returns index(front) , if you need value then return "this.qArray[this.front]"
    }

    getRear() // we use a formula to get "rear" from "front & size " variable
    {       //null check
            if(this.size===0)return null
            let rear = (this.front+this.size-1)%this.cap  // (front+size-1)%cap

            return rear  // current Index of rear
    }

    enqueue(x)
    {
        //queue is full -> all the nodes are full for given Cap=4 
        if(this.size===this.cap)return `${x} :cannot be inserted`

        let rear = (this.front+this.size-1)%this.cap // calculate the current index rear
        //next position of rear to Insert
        rear = (rear+1)%this.cap    // Circular Array , we can get empty spots in the front too : Next position of "rear"
        this.qArray[rear]=x         // push value at "rear"
        this.size++                 // Increase the size
    }

    dequeue()
    {
        //null check
        if(this.size===0)return null

        let dataToDelete = this.qArray[this.front] //fetch the data to Delete
        this.front = (this.front+1)%this.cap        // next position of Front
        this.size--
        return dataToDelete
    }

    isEmpty()
    {
        return (this.size===0)
    }

    size()
    {
        return this.size
    }
}


let queue = new Queue(4)
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(`Front=${queue.getFront()}`)  //OP: Front=0
console.log(`Rear=${queue.getRear()}`)    //OP: Rear =3
console.log(queue)  
console.log(`Dequeue of Queue =${queue.dequeue()}`) //OP:   10
console.log(`Front=${queue.getFront()}`)            //OP:   Front=1
console.log(`Rear=${queue.getRear()}`)              //op:   Rear =3
queue.enqueue(50)
console.log(queue)
console.log(`Front=${queue.getFront()}`)            //OP: Front =1
console.log(`Rear=${queue.getRear()}`)              //Op: Rear = 0 
console.log(queue.enqueue(60))                      // Cannot Insert as Queue is full
 console.log(`Front=${queue.getFront()}`)           //OP: Front =1
 console.log(`Rear=${queue.getRear()}`)             //OP: Rear =0
 console.log(queue)



//Note:  Time Complexity of all the Operations O(1) 
// Since we are not running any loops
