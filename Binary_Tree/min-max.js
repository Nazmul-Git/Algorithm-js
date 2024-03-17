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
      if (value > currNode.value) { //right
        if (currNode.right === null) {
          currNode.right = new Node(value);
          break;
        }
        currNode = currNode.right;
      } else {  //left
        if(currNode.left===null){
        currNode.left = new Node(value);
        break;
        }
        currNode = currNode.left;
      }
    }
  }

//   Traverse
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

  maximum(){
    let queue=this.DFS_InOrder(this.root, []);
    console.log(queue);
    return queue[queue.length-1];
  }

  predecessor(target){
    let currNode=this.root;
    while(currNode){
      if(currNode.right===null) break;
      if(target<currNode.value){
        currNode=currNode.left;
      }
      if(currNode.value===target){
        currNode=currNode.left;
        this.targetNode=currNode.left;
        // console.log(currNode);
      }
      currNode=currNode.right;
    }
    return currNode.value;
  }

  successor(target){
    let currNode=this.root;
    while(currNode){
      if(currNode.left===null) break;
      if(target>currNode.value){
        currNode=currNode.right;
      }
      if(currNode.value===target){
        currNode=currNode.right;
        this.targetNode=currNode.right;
        // console.log(currNode);
      }
      currNode=currNode.left;
    }
    return currNode.value;
  }

  // delete(target){
  //   let currNode=this.root;
  //   if(target<currNode.value){
  //     let predecessor=this.predecessor(target);
  //     console.log(predecessor,this.targetNode)
  //     // this.targetNode.value=predecessor;
  //   }
  // }
}

let bst = new BinaryTree(50);
bst.insert(40);
bst.insert(60);
bst.insert(35);
bst.insert(45);
bst.insert(52);
bst.insert(70);
bst.insert(38);
bst.insert(62);
bst.insert(80);
bst.insert(61);
bst.insert(65);
bst.insert(39);


// console.log(bst.DFS_InOrder(bst.root,[]));
// console.log(bst.minimum()); //30
// console.log(bst.maximum()); //80

// console.log(bst.predecessor(50));
// console.log(bst.successor(60));
// bst.delete(40);
console.log(JSON.stringify(bst));
