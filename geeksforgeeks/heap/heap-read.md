Min Heap Notes
=============

A min heap is like a pyramid where each parent is smaller than its children.
We use an array to represent this pyramid. For any element at index i:

Its parentIndex= Math.floor( (i-1)/2 )
Its leftchildindex = 2i + 1
Its rightchildindex= 2i + 2

When we add a new number (insert):
================================
We put it at the end of the array.
Then we compare it with its parent. If it's smaller, we swap them.
We keep doing this until it's in the right place.


When we want to remove the smallest number (extractMin):
========================================================
We take the first number (the root) as it's the smallest.
We move the last number to the top.
Then we compare this number with its children. If a child is smaller, we swap them.
We keep doing this until it's in the right place.


These processes of moving numbers up or down are called "heapify up" and "heapify down".

The main operations are:

1) insert(value):       Adds a new value to the heap.
2) extractMin():        Removes and returns the Min value from the heap.
3) heapifyUp(index):    Moves an element up to its correct position.  ( while Insert() calls)
4) heapifyDown(index):  Moves an element down to its correct position.( while delete/extraxt() call)

This implementation ensures that the Min element is always at the root (index 0), and that every parent is Smaller than its children. 
The time complexity for insert and extractMin operations is O(log n), where n is the number of elements in the heap.

Method Need to write MinHeap
===========================
    Methods Needed
1) Constructor : Create an Empty Array "heap"
2) getParentIndex(i) : get Parent Index= floor( (i-1)/2 )
3) getLeftChildIndex : (2*i + 1)
4) getRightChildIndex: (2*i + 2)
5) insert(value)
6) extractMin() --> Delete the top element ( used for HeapSort)
7) heapifyUp(index) --> To restor Heap Property by moving Item UP ( Insert)
8) heapifyDown(index) --> To restore Heap Property by moving Item Down ( Extraxt/delete)
