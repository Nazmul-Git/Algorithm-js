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
    #getPreviousNode(index){
        index--;
        let data=this.head;
        while(index){
            // console.log(data.value);
            data=data.next;
            index--;
        }
        return data;
    }
    insertAtPosition(value, index){
        let node= new Node(value);
        if(index===0) this.prepend(value);
        else if(index=== this.length) this.append(value);
        else{
            let preNode=this.#getPreviousNode(index);
            node.next=preNode.next;
            preNode.next.previous=node;
            preNode.next=node;
            node.previous=preNode;
        }
    }
    deleteAtPosition(index){
        if(index===0){
            this.head=this.head.next;
        }
        else if(index===this.length){
            let preNode=this.#getPreviousNode(index);
            preNode.next=null;
            this.tail=preNode;
        }
        else{
            let preNode=this.#getPreviousNode(index);
            preNode.next=preNode.next.next;
            preNode.next.next.previous=preNode;
        }
        this.length--;
    }
    updateValue(value,index){
        let previousNode=this.#getPreviousNode(index);
        previousNode.next.value=value;
    }
    print(){
        let data=this.head;
        while(data){
            console.log(`<-----Length is--${this.length}-------->`)
            console.log(data.value);
            data=data.next;
        }
        return data;
    }
}
let nodeList=new Doubly_Linklist(10);
nodeList.append(20);
nodeList.prepend(5);
nodeList.insertAtPosition(15,2);
nodeList.insertAtPosition(25,3);
nodeList.insertAtPosition(-100,0);
nodeList.deleteAtPosition(2);
nodeList.updateValue(200,3);
// console.log(nodeList);
nodeList.print();
