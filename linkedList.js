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