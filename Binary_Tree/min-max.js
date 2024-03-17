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

  DFS_InOrder(node, list){
    // console.log(node)
    if(node.left) this.DFS_InOrder(node.left,list);
    list.push(node.value);
    if(node.right) this.DFS_InOrder(node.right,list);
    return list;
  }
  
  minimum(){
    let queue=this.DFS_InOrder(this.root, []);
    console.log(queue);
    return queue[0];
  }
}

let bst = new BinaryTree(50);
bst.insert(30);
bst.insert(40);
bst.insert(70);
bst.insert(80);


// console.log(bst.DFS_InOrder(bst.root,[]));
console.log(bst.minimum()); //30
// console.log(JSON.stringify(bst));
