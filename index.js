// Arrays
const input = [, 2, 3, 4, 5];

for (const [key, value] of input) {
  console.log("Array for loop", key, value);
}

//  map, filter, reduce, slice, splice, concat, unshift, push, pop -> methods
// Insert or remove from end O(1)   ,    Insert or remov from begining  O(n)
// Loop, filter, foEach, map O(n)
// Access O(1)    Search O(n)  push/Pop O(1)
// Shift/Unshift/Concatt/Slice/Splice O(n)

// Objects
// Objects are unordered.
const person = {
  name: "Ranga",
  age: 2,
  getHandsome: () => {
    console.log(this.name + "is Handsome");
  },
};

// Object.keys(person), Object.entries(person), Object.values(person) => O(n)
// Insert, remove, access O(n)

// Sets

// Set is a data structure that can hold a collection of values,The values however must be unique.
// You can store ny data types in the set , they are dynamically sized.They donot maintain insertion order.
// sets are iterable and they can be used with loops.
// Searching and deleting an elements is faster in sets than arays and sets have only unique values.

const newSet = new Set([1, 2, 3, 4, 5]);
newSet.add(6);
newSet.delete(2);
newSet.size();
newSet.clear();
newSet.has(5);
newSet.values();
newSet.forEach((item) => {
  console.log(item);
});
newSet.length;

// Maps
// Map is an unordered collection of key-value pair. Both keys and values can be of any data type.
// Maps are iteratble and can be used with for loop.
// Objects are unordered where as maps are ordered.
// Object has default keys byt maops dont.
// We can add functionality to object but maps are only used to store purpose.

const map = new Map([
  [a, 1],
  [b, 2],
]);
for (const [key, value] of map) {
  console.log(key, value);
}
map.set("c", 3);
map.has("a");
map.delete("c");
map.size;
map.clear();

// Stack
// Stack is data structure in sequential collection for elements that folow the principle of LIFO  (Last In First Out)
// It has methods like push, pop.
// Eg Usage:
// 1. Browser history
// 2. Undo when typing
// 3. Expresion Conversion
// 4. Call stack Javascript runtime

// Queue
// Queue is a data structure in sequential collection of elements that follows the principle of First in First Out (FIFO).
// Queue is an abstract data type.It is defined by its behaviour rather than the mathematical model.
// Enqueue -> Add eleemnt from the rear of the Queue.
// Dequeue -> Removes the element from the front of the Queue.
// Eg Usage:
// 1. Printers
// 2. CPU task scheduling.
// 3. Callback queue in Javascript.

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift(); // shift() removes the elements from the first and return the element
  }

  isEmpty() {
    return this.items.length;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

// Optimized method of Queues to enhance by decreasing the time complexity and maintain constant time complexity.
// We can achieve this by storing the values as a key value pair and then having trackers in place for frint and the rear.

class OptimizedQueue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.front - this.rear === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.front - this.rear;
  }

  print() {
    console.log(this.items);
  }
}
const optQueue = new OptimizedQueue();
optQueue.enqueue(10);
optQueue.enqueue(20);
optQueue.enqueue(30);
optQueue.dequeue(20);

// Circular Queue
// Circular queue is a fixed lenght queue where the new element gets enqueued if there is space

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const returnItem = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength = this.currentLength - 1;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return returnItem;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
    } else {
      let str = "";
      let i;
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str = str + this.items[i] + " ";
      }
      str = str + this.items[i];
      console.log(str);
    }
  }
}

const p = new CircularQueue(5);
p.enqueue(10);
p.enqueue(20);
p.enqueue(50);
p.enqueue(60);
p.enqueue(70);
p.print();
p.dequeue();
p.dequeue();
p.print();

//LinkedList:

// Is a linear data structure that icludes a series of nodes where the next node is connected to its previous node.
// Each node contans the data and the pointer that points to next node.
// Linked list over Array
// With LinkedlIst the insert and deletion is faster without having to reallocation or reorganise of theentire data.
// Drawback: Random acces of elements is not feasible and accesiing an element has linear time complexity.
// Supports 3 main operations: Insertion, Deletion, Search
// All application of stacks and queues are aplicationsof Linked List
// Image Viewer

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// In linkedlIst we always maintain a pointer to thenext element, so when we create a new LinkedNode the head points to null and size to track the node
//

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node; // First element is set as node
    } else {
      node.next = this.head;
      this.head = node; // We move the head to the newly added item and maintain reference in the next
    }
    this.size++; // We increment the value no matter if it
  }

  insert(index, value) {
    const node = new Node(value);
    if (index === 0) {
      this.prepend(value);
    }

    if (index < 0 || index > this.size) {
      return;
    } else {
      let node = new Node(value);
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      previous.next = node;
      node.next = previous.next;
      this.size++;
    }
  }
  // Remove given the index
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    let removeNode;
    if (index == 0) {
      removeNode = this.head;
    } else {
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        removeNode = previous.next;
        previous.next = removeNode.next;
      }
      this.size--;
      return removeNode.value;
    }
  }
  // Remove the value
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  linkedListSearch(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let curr = this.head;
    let i = 0;
    while (curr) {
      if (curr.value == value) {
        return i;
      }
      i++;
      curr = curr.next;
    }
  }

  linkedListReverse() {
    let prev = null;
    let curr = this.head; 
    while(curr) {
      let next = curr.next;
      curr.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;

  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.node = value;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = this.node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValue = "";
      while (curr === true) {
        listValue += `${curr.value}`;
        curr = curr.next;
      }
      console.log("LinkedList :", listValue);
    }
  }

}

const linkedlist = new LinkedList();
console.log("List size", linkedlist.size());
console.log("List isEmpty", linkedlist.isEmpty());

// Linkedlist with a tail pointer.

class LinkedListTail {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value}->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

module.exports = LinkedListTail;

/** Uncomment when testing only this file */
/**
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print();
console.log(list.getSize());
list.removeFromFront();
list.print();
list.removeFromEnd();
list.print();
*/


// Linkedlist with stack
class LinkedListStack {
  constructor() {
    this.list = new LinkedListTail();
  }

  push(value) {
    this.list.append(value)
  }

  pop() {
    this.list.removeFromFront();
  } 

  peek() {
    return this.head.value()
  }
}

// Algorithams

function binarySearch(array, leftIndex, rightIndex, target) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  // console.log(middleIndex);
  if (array[middleIndex] === target) {
    return middleIndex;
  } else {
    if (array[middleIndex] < target) {
      return binarySearch(array, middleIndex + 1, rightIndex, target);
    } else {
      return binarySearch(array, leftIndex, middleIndex - 1, target);
    }
  }
}

console.log(
  "Binary Search:",
  binarySearch([1, 3, 5, 6, 7, 8, 19, 20, 22], 0, 9, 8)
);
// console.log(binarySearch([1, 3, 5, 6, 7, 8, 19, 20], 0, 8, 20));
// console.log(binarySearch([1, 3, 5, 6, 7, 8, 19, 20], 0, 8, 1));

// Input [8,20,-6,2,-4,]
function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

// console.log("Bubble sort", bubbleSort([8, 20, -6, 2, -4]));

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i - 1;
    let numberTosort = array[i];
    while (j > 0 && array[j] > numberTosort) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = numberTosort;
  }
  return array;
}

//console.log("Insertion sort", insertionSort([8, 20, -6, 2, -4]));
//console.log("Insertion sort", insertionSort([8, 0, -1, -13, 4, 22, 12]));

function quickSort(input) {
  // in quick sort we start the logic b icking the last index, middle index or the median.
  // let use the last index as the pivot.

  if (input.length < 2) {
    return input;
  }

  let pivot = input[input.length - 1];
  let left = [];
  let right = [];
  for (i = 0; i < input.length - 1; i++) {
    if (input[i] < pivot) {
      left.push(input[i]);
    } else {
      right.push(input[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.log("Quick sort", quickSort([8, 20, -6, 2, -4]));
//console.log("Quick sort", quickSort([8, 0, -1, -13, 4, 22, 12]));

function mergeSort(input) {
  if (input.length < 2) {
    return input;
  }
  const mid = Math.floor(input.length / 2);
  const leftHalf = input.slice(0, mid);
  const rightHalf = input.slice(mid);
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
  let sortedArray = [];
  while (left && left.length && right && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

//console.log("Merge sort", mergeSort([8, 20, -6, 2, -4]));
//console.log("Merge sort", mergeSort([8, 0, -1, -13, 4, 22, 12]));
// Time-Complexity is O(nlogN) -> This is the best time complexity alogoirtham when sorting

function cartesianProduct(arr1, arr2) {
  const carteseanProduct = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      carteseanProduct.push([arr1[i], arr2[j]]);
    }
  }
  return carteseanProduct;
}
// console.log("cartesianProduct", cartesianProduct([1, 2, 3], [5, 6, 7]));

// Climbing staircase
function climbingStaircase(n) {
  if (n <= 2) {
    return n;
  }
  return climbingStaircase(n - 1) + climbingStaircase(n - 2);
}
function climbingStaircase2(n) {
  let noways = [1, 2];
  for (i = 2; i < n; i++) {
    noways[i] = noways[i - 1] + noways[i - 2];
  }
  return noways[n - 1];
}
console.log("climbingStaircase", climbingStaircase(10));
console.log("climbingStaircase", climbingStaircase2(10));
console.log("climbingStaircase", climbingStaircase2(5));
 