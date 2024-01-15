// let LinkListStructure={
//     head:{
//         value:100,
//         next:{
//             value:200,
//             next:{
//                 value:300,
//                 next:null
//             }
//         }
//     },
//     tail:{
//         value:300,
//         next:null
//     },
//     length:2
// }

////////////////////////////////////////////////////////////////
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// link-list
class LinkList {
  head;
  tail;
  length;
  constructor(value) {
    let node = new Node(value);
    // Set 2 pointer head & tail and length
    this.head = node;
    this.tail = node;
    this.length = 1;
    // console.log('This : ',this);
  }
  append(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  prepend(value) {
    let node = new Node(value, this.head);
    this.head = node;
  }

  #getPrevious(index) {
    index--;
    let data = this.head;
    // console.log(data)
    while (index) {
      data = data.next;
      index--;
    }
    return data;
  }
  insertAtPosition(value, index) {
    if (index === 0) this.prepend(value);
    else if (index === this.length) this.append(value);
    else {
      // run loop & find previous idx
      let previousNode = this.#getPrevious(index);
    //   console.log(previousNode);
      let newNode = new Node(value, previousNode.next);
      previousNode.next = newNode;
    }
  }
  print() {
    let data = this.head;
    // console.log(data);
    while (data) {
    //   console.log(data);
      console.log(data.value);
      data = data.next;
    }
  }
}

let list = new LinkList(100);
list.append(200);
list.append(300);
list.append(400);
list.append(500); 
list.append(600);
list.prepend(10);
list.append(700);
list.insertAtPosition(550, 6);
list.print();


/**-->  print all data
 
Node {
  value: 10,
  next: Node { value: 100, next: Node { value: 200, next: [Node] } }
}
Node {
  value: 100,
  next: Node { value: 200, next: Node { value: 300, next: [Node] } }
}
Node {
  value: 200,
  next: Node { value: 300, next: Node { value: 400, next: [Node] } }
}
Node {
  value: 300,
  next: Node { value: 400, next: Node { value: 500, next: [Node] } }
}
Node {
  value: 400,
  next: Node { value: 500, next: Node { value: 550, next: [Node] } }
}
Node {
  value: 500,
  next: Node { value: 550, next: Node { value: 600, next: [Node] } }
}
Node {
  value: 550,
  next: Node { value: 600, next: Node { value: 700, next: null } }
}
Node { value: 600, next: Node { value: 700, next: null } }
Node { value: 700, next: null }

 */