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
    length;
    constructor(value){
        let node= new Node(value);
        this.head=node;
        this.tail=node;
        this.length++;
    }
}
let nodeList=new Doubly_Linklist(10);
console.log(nodeList);
