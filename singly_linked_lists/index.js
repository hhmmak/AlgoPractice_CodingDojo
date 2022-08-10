class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList{
  constructor(data){
    this.head = null;
  }

  //.. add node to front of list
  addFront(val) {
    let newNode = new Node(val);
    
    // if list is empty
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    // if list length > 0
    newNode.next = this.head;
    this.head = newNode;
    return this
  }
  
  //.. remove node from front of list
  removeFront() {
    // if list is empty
    if (!this.head){
      return null;
    }
    // if list length > 0
    this.head = this.head.next
    return this;
  }

  front() {
    // if list is empty
    if (!this.head){
      return null;
    }
    return this.head.data;
  }

}

SLL1 = new SingleLinkedList()
console.log(SLL1.addFront(18));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(73));
console.log(SLL1.removeFront());
console.log(SLL1.removeFront());
console.log(SLL1.front());
console.log(SLL1.removeFront());
console.log(SLL1.front());