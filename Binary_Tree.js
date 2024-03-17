

class Node {
    constructor(value, left=null, right=null){
        this.value=value;
        this.left=left;
        this.right=right;
    }
};

class BinaryTree{
    constructor(value){
        this.root= new Node(value);
    }

    insert(value){
        let currNode=this.root;
        while(currNode){
            if(value > currNode.value){
                //right 
                if(currNode.right===null){
                    currNode.right= new Node(value);
                    break;
                }
                currNode=currNode.right;
            }else{
                // left
                if(currNode.left===null){
                    currNode.left= new Node(value);
                    break;
                }
                currNode=currNode.left;
            }
        }
    }
    
    search(target){
        let currNode= this.root;
        while(currNode){
            if(currNode.value===target) return 'Data Found';
            else if(target > currNode.value) currNode=currNode.right;
            else currNode=currNode.left;
        }
        return 'Data Not Found'
    }

    BFS_traverseOnTree(){
        let currNode=this.root;
        let queue=[currNode];
        while(queue.length){
            currNode=queue[0];
            if(currNode.left) queue.push(currNode.left);
            if(currNode.right) queue.push(currNode.right);
            console.log(queue[0].value);
            queue.shift();
        }
    }

    DFS_inOrderTraversal(node){
        // console.log(node);
        if(node.left) this.DFS_inOrderTraversal(node.left);
        console.log(node.value)
        if(node.right) this.DFS_inOrderTraversal(node.right);
    }
}

let tree= new BinaryTree(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(80);

// console.log(tree);
// console.log(tree.search(15));
// console.log(tree.search(19));
// console.log(JSON.stringify(tree));

// tree.BFS_traverseOnTree();
tree.DFS_inOrderTraversal(tree.root);