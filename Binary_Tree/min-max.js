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

  insert(value) {
    let currNode = this.root;
    while (currNode) {
      if (value > currNode.value) {
        if (currNode.right === null) {
          currNode.right = new Node(value);
          break;
        }
        currNode = currNode.right;
      } else {
        if(currNode.left===null){
        currNode.left = new Node(value);
        break;
        }
      }
      currNode = currNode.left;
    }
  }

  inOrder(node, list){
    // console.log(node)
    if(node.left) this.inOrder(node.left,list);
    list.push(node.value);
    if(node.right) this.inOrder(node.right,list);
    return list;
  }
  
}

let bst = new BinaryTree(50);
bst.insert(30);
bst.insert(40);
bst.insert(70);
bst.insert(80);


console.log(bst.inOrder(bst.root,[]));
// bst.minimum();
// console.log(JSON.stringify(bst));
