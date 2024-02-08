class Node{
    constructor(value, next=null){
        this.value=value;
        this.next=next;
    }
}

class Stack{
    head;
    tail;
    length;
    constructor(value){
        let node= new Node(value);
        this.head=node;
        this.tail=node;
        this.length=1;    
    }

    push(value){
        let node= new Node(value);
        this.tail.next=node;
        this.tail=node;
        this.length++;
    }
    print(){
        let data= this.head;
        while(data){
            console.log(data);
            data=data.next;
        }
        return data;
    }
}
let list=new Stack(10);
list.push(20);
list.push(30);
list.print();