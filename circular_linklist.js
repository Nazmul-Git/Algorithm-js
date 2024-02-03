class Node{
    constructor(value, next=null){
        this.value=value;
        this.next=next;
    }
}

class CircularLink_list{
    head;
    tail;
    length;
    constructor(value){
        let node= new Node(value);
        this.head=node;
        this.tail=node;
        this.length=1;
    }

    append(value){
        let node = new Node(value,next=this.head);
        this.tail=node;
        this.tail.next=node;
        this.length++;
    }

    print(){
        let heads= this.head;
        while(heads){
            console.log(heads.value);
            heads=heads.next;
        }
    }
}
const nodeList=new CircularLink_list(10);
nodeList.append(15);
nodeList.print();