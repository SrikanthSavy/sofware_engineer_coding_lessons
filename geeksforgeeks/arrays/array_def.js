let arr = [10,20,30,40,80,6]
console.log(arr)

const array = [10,20]
array.push(30)
array.push(9)
console.log(`array = ${array}`)

//unshift() :: add at the begining
array.unshift(55) //OP:55,10,20,30,9
console.log(`array.unshift(55)  begining Index = ${array}`)

array[1]=60  //O/P: 55,60,20,30,9
console.log(`array[1]=60 = ${array}`) 

// Adding elem beyond Index size, (empty)
array[10]=99  //O/P: = 55,60,20,30,9,,,,,,99
console.log(`array[10]=99 = ${array}`)  
console.log(array.length)  //OP: 11

//Deleting or removing an last element from an array pop()
console.log(`Before Deleting pop() = ${array}`)  
array.pop()
array.pop()  // removes empty element
console.log(`After Deleting pop() = ${array}`)  

//shift() : Delete the First Element 
console.log(`Before Deleting shift() = ${array}`)  
console.log(`array.shift() = ${array.shift()}`)    // removes First- element , return deleted elemtn ******
console.log(`After Deleting shift() = ${array}`)  






