class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  
}

let bst= new BinaryTree(50);
console.log(bst);