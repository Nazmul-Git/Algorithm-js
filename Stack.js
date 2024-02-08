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
    pop(){
        let data= this.head;
        let previous=null;
        while(data.next){
            previous=data;
            data=data.next;
            // if(data.next===null) break;
        }
        console.log('Previous node value = ',previous.value);
        previous.next=null;
        this.tail=previous;
        this.length--;

        return data.value;
    }
    peek(){
        return this.tail.value;
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
let list=new Stack(10);
list.push(20);
list.push(30);
list.pop();
list.push(300);
list.push(400);
list.pop();
list.print();