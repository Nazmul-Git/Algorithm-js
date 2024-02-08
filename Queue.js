class Node{
    constructor(value,next=null){
        this.value=value;
        this.next=next;
    }
}

class Queue{
    head;
    tail;
    length;
    constructor(value){
        let node= new Node(value);
        this.head=node;
        this.tail=node;
        this.length=1;
    }
    enqueue(value){
        let node= new Node(value);
        this.tail.next=node;
        this.tail=node;
        this.length++;
    }
    print(){
        let data= this.head;
        while(data){
            console.log(data.value);
            data=data.next;
        }
        return data;
    }
}
let list= new Queue(10);
list.enqueue(20);
list.enqueue(30);
list.print();