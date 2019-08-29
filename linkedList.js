class _Node { 
  constructor(value, next){
    this.value = value; 
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else {
      //starts with the first node
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, beforeNode){
    if(this.head === null){
      this.insertFirst(item);
    }
    if(beforeNode === this.head){
      this.insertFirst(item);
    }
    let currNode = this.head;
    let prevNode = this.head;
  
    let targetNode = this.find(beforeNode);
    while(currNode !== targetNode){
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = new _Node(item, targetNode);
    // console.log(prevNode);
    // console.log(prevNode.next);
  }

  insertAfter(item, afterNode){
    if(this.head === null){
      this.insertFirst(item);
    }
    let currNode = this.head;
    let targetNode = this.find(afterNode);

    while(currNode !== targetNode){
      currNode = currNode.next;
    }
    currNode.next = new _Node(item, targetNode.next);
    // console.log(currNode);
    // console.log(currNode.next);
  }

  insertAt(item, location){
    if(this.head === null){
      this.insertFirst(item);
    }
    if(location === 0){
      this.insertFirst(item);
    }
    let currNode = this.head;
    let prevNode = this.head;
    for(let i=0; i<location; i++){
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = new _Node(item, currNode);
    console.log(prevNode);
    console.log(prevNode.next);
  }  

  find(item){
    //start at the head
    let currNode = this.head;
    //if the list is empty 
    if(!this.head){
      return null; 
    }
    //check for the item
    while(currNode.value !==item){
      //return ull if its the end of the list and 
      //the item is not on the list
      if(currNode.next === null){
        return null;
      }
      else{
        //otherwise keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  remove(item){
    //if the list is empty
    if(!this.head){
      return null;
    }
    //if node to remove is the head, make the next the new head
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //previous node
    let previousNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      //save the previous node
      previousNode = currNode; 
      currNode = currNode.next; 
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    //making new connection of next pointer
    previousNode.next = currNode.next;
  }
}

function main(){
  let SLL = new LinkedList;
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  //console.log(SLL.find('Starbuck'));
  //SLL.insertLast('Tauhida');
  //SLL.remove('Tauhida');
  //console.log(SLL.find('Tauhida'));
  //console.log(SLL.remove('squirrel'));
  //console.log(SLL.insertBefore('New', 'Helo'));
  //console.log(SLL.insertBefore('Test', 'Husker'));
  //console.log(SLL.insertAfter('After', 'Boomer'));
  //console.log(SLL.insertAt('At', 3));
  //console.log(SLL.insertAt('At', 2));
  //console.log(SLL.find('At'));
  return SLL;
}

let list = main();

function display(list){
  if(list.head === null){
    return 'empty linked list';
  }
  let display = [];
  let currNode = list.head;
  while(currNode !== null){
    display.push(currNode);
    currNode = currNode.next;
  }
  console.log(display);
  return display;
}
//display(list);

function size(list){
  let count = 0;
  if(list.head === null){
    return 0;
  }
  let currNode = list.head;
  while(currNode !== null){
    count ++;
    currNode = currNode.next;
  }
  console.log(count);
  return count;
}
//size(list);

function isEmpty(list){
  if(list.head === null){
    return 'Your Linked List is empty';
  }
  return 'Your linked list has items';
}
// console.log(isEmpty(list));

let empty = new LinkedList();
// console.log(isEmpty(empty));

function findPreviousByValue(list, value){
  let currNode = list.head;
  let prevNode = list.head;

  for(let i=0; i<value; i++){
    currNode = currNode.next;
    prevNode = currNode;
  }
  return(prevNode);
}

findPreviousByValue(list, 2);
//check that correct item, linkedlist starts 0, 1, 2, ...

function findPrevious(list, item){
  if(item === list.head.value){
    return 'No item before';
  }
  let currNode = list.head;
  let prevNode = list.head;
  while(currNode.value !== item){
    prevNode = currNode;
    currNode = currNode.next;
    if(currNode.next === null && currNode.value !== item){
      console.log('Item not found');
      return 'Item not found';
    }
  }
  console.log(prevNode);
  return prevNode;
}

// findPrevious(list, 'Helo');
// findPrevious(list, 'Boomer');
// findPrevious(list, 'Starbuck');
// findPrevious(list, 'sdf');
// findPrevious(list, 'Apollo');

function findLast(list){
  if(list.head === null){
    return 'No items';
  }
  let currNode = list.head;
  while(currNode.next !== null){
    currNode = currNode.next;
  }
  console.log(currNode);
  return currNode;
}

//findLast(list);


//4. 
function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}
/**
 *  A, B, B, C
 *  head = A <- newNode while  A is not last
 *  if B
 * 
 *  This function deletes any dupliate values from the linked list 
 *  it does this by reassigning the next pointer if it comes across any 
 *  duplicate values. 
 *  O(n^2) - nested loop
 *  
 */


function reverse(list) {
  if(list.head === null){
    console.log('you have an empty linked list');
    return 'You have an empty linked list';
  }
  let currNode = list.head;
  let prevNode = null;
  let nextNode = list.head;
  while(currNode !== null){
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  list.head = prevNode;
  display(list);
  return list;
}
//reverse(list);

// a -> b -> c
// a <- b <- c
// new Node(item, prevNode)

function thirdToLast(list){
  if(list.head === null){
    return 'You have an empty linked list';
  }
  
}

thirdToLast(list);