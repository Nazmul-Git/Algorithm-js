class Node{
    constructor(value, previous=null, next=null){
        this.value=value;
        this.previous=previous;
        this.next=next;
    }
}

class Doubly_Linklist{
    head;
    tail;
    length=0;
    constructor(value){
        let node= new Node(value);
        this.head=node;
        this.tail=node;
        this.length++;
    }
    append(value){
        let node= new Node(value);
        // console.log(node);
        this.tail.next=node;
        node.previous=this.tail
        this.tail=node;
        this.length++;
         
    }
    prepend(value){
        let node= new Node(value);
        node.next=this.head;
        this.head.previous=node;
        this.head=node;
        this.length++;
    }
}
let nodeList=new Doubly_Linklist(10);
nodeList.append(20);
nodeList.prepend(5);
console.log(nodeList);
