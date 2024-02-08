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
        if(this.length===1){
            this.head=null;
            this.tail=null
            this.length--;
            return data.value;
        }
        while(data.next){
            previous=data;
            data=data.next;
        }
        // console.log('Previous node value = ',previous.value);
        previous.next=null;
        this.tail=previous;
        this.length--;

        return data.value;
    }
    peek(){
        return this.tail.value;
    }
    isEmpty(){
        return this.length ? false :true ;
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
console.log(list.isEmpty());
list.pop();
list.pop();
list.pop();
console.log(list.isEmpty());
list.print();