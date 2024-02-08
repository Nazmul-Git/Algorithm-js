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
    dequeue(){
        this.head=this.head.next;
        this.length--;
    }
    isEmpty(){
        return this.length? false : true;
    }
    peek(){
        return this.head.value;
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
list.dequeue();
list.dequeue();
console.log(list.isEmpty());
console.log(list.peek());
list.enqueue(40);
list.dequeue();
list.dequeue();
console.log(list.isEmpty());
list.print();