//MinHeap Logic
/*
Methods Needed
1) Constructor : Create an Empty Array "heap"
2) getParentIndex(i) : get Parent Index= floor( (i-1)/2 )
3) getLeftChildIndex : (2*i + 1)
4) getRightChildIndex: (2*i + 2)
5)insert(value)
6)extractMin() --> Delete the top element ( used for HeapSort)
7) heapifyUp(index) --> To restor Heap Property by moving Item UP ( Insert)
8) heapifyDown(index) --> To restore Heap Property by moving Item Down ( Extraxt/delete)

*/

class MinHeap
{
    //constructor
    constructor()
    {  this.heap = []  }

    //ParentIndex for given Index
    getParentIndex(index)
    { return Math.floor((index-1)/2) }

    //LeftChildIndex for given Index
    getLeftChildIndex(i)
    { return (2*i +1)  }
    
    //RightChildIndex for given Index
    getRightChildIndex(i)
    { return (2*i +2)  }


    //swap(index1,index2)
    swap(index1,index2)
    {
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }

    //insert(val)  use push() to add
    insert(value)
    {
        this.heap.push(value)               // push item to last of array
        this.heapifyUp(this.heap.length-1) //  now heapify from last to top
    }

    //heapifyUp(index)
    heapifyUp(index)
    {
        //we use 2 var
        let currentIndex = index
        let parentIndex  = this.getParentIndex(index)

        //while lopp to move up until root , if parent value> current vvalue ,        NOTE: we do it till root or parent<current ( do nothing)
        //if so we call swap and make parent as current and compare it withs its parent(parent->parent)
        while(currentIndex>0  && this.heap[parentIndex]>this.heap[currentIndex])
        {
            this.swap(currentIndex,parentIndex)
            currentIndex = parentIndex
            parentIndex = this.getParentIndex(currentIndex)
        }
    }
    


    //extraxt min / delete top min value i.e. root ( last item from array : use pop()) 
    // pop() to move last item to root i.e. heap[0]= heap.pop()
    extractMin()
    {
        // we handle 2 corner cases here 
        if(this.heap.length===0) return null  // empty
        if(this.heap.length===1) return this.heap.pop()  // 1 item only
        
        // we store item to be deleted heap[0] in some variable
        const minItemDeleted = this.heap[0]

        //Logic: We move last item from array to heap[0] using pop() and call HeapifyDown() from root
        this.heap[0] = this.heap.pop()

        this.heapifyDown(0) // from root to down heapify

        return minItemDeleted
    }


    //heapifyDown(index)
    heapifyDown(index)
    {
        // 2 variables  -> currentIndex, smallestIndex
        //Logic: while(true) -- we check if smallest >leftchild(index) or smallest >rightchildIndex, then smallest == left/rightchildIndex
        // We break loop, when smallest === current , break;  
        //other wise swap ( [current],[smallest])  && make current == smalled

        let currentIndex  = index
        let smallestIndex = currentIndex
        let size = this.heap.length

        while(true)
        {
            const leftChildIndex  = this.getLeftChildIndex(currentIndex)
            const rightChildIndex = this.getRightChildIndex(currentIndex)

            //check if smallest > left child   && leftchild<size
            if(leftChildIndex<size && this.heap[smallestIndex]>this.heap[leftChildIndex])
                smallestIndex=leftChildIndex
           
            //check if smallest > right child   && rightchild<size
            if(rightChildIndex<size && this.heap[smallestIndex]>this.heap[rightChildIndex])
                smallestIndex=rightChildIndex

            //Break Condition , id smallest is smalleer, then do nothing, dont have to go down as they are greater
            if(smallestIndex===currentIndex)
                break

            //otherwise swap current,smallest i.e. current Indexvalue with either left/rightchild  value
            //and make currentIndex == left/right i.e. smallest is holding that value now
            this.swap(currentIndex,smallestIndex)
            currentIndex= smallestIndex
        }
    }  //end of HeapifyDown()

    //displayHeap
    displayHeap()
    {
        console.log(this.heap)
    }

}  //End of MinHeap- Class

//Testing code Now

const minHeap = new MinHeap()
minHeap.insert(10)
minHeap.insert(5)
minHeap.insert(2)
minHeap.insert(20)
minHeap.insert(1)
minHeap.insert(40)
minHeap.insert(15)
minHeap.insert(5)
minHeap.insert(11)

console.log(`After Inserting values in Min heap }`)
minHeap.displayHeap()

console.log(`Deleting top most element : ${minHeap.extractMin()}`)

console.log(`After Deleting  values in Min heap }`)
minHeap.displayHeap()