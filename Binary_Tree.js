

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
        let root=this.root;
        while(true){
            if(value > root.value){
                //right 
                if(root.right===null){
                    root.right= new Node(value);
                    break;
                }
                root=root.right;
            }else{
                // left
                if(root.left===null){
                    root.left= new Node(value);
                    break;
                }
                root=root.left;
            }
        }
    }
}

let tree= new BinaryTree(10);
tree.insert(20);
tree.insert(5);
console.log(tree);