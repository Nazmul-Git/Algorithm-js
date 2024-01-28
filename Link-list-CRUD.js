class Node {
    constructor(value, next=null){
        this.value=value;
        this.next=next;
    }
}

class LinkList {
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
        let node = new Node(value);
        this.tail.next=node;
        this.tail=node;
    }
    prepend(value){
        let node= new Node(value, this.head);
        this.head=node;
    }

    #getPreviousNode(index){
        index--;
        let data= this.head;
        while(index){
            data=data.next;
            index--;
        }
        return data;
    }

    #getCurrentNode(index){
        let data=this.head;
        while(index){
         data=data.next;
         index--;
        }
        return data
        
    }

    insertAtAnyPosition(value, index){
        if(index===0) this.prepend(value);
        else if(index=== this.length) this.append(value);
        else{
            let previousNode=this.#getPreviousNode(index);
            let newNode=new Node(value,previousNode.next);
            previousNode.next=newNode;
        }
    }

    deleteAtPosition(index){
        let previousNode=this.#getPreviousNode(index);
        previousNode.next=previousNode.next.next;
    }

    updateValue(val,idx){
        let currNode=this.#getCurrentNode(idx);
        console.log(currNode);
        currNode.value=val;
    }

    print(){
        let data = this.head;
        console.log(data)
        while(data){
            console.log(data.value);
            data=data.next;
        }
    }

    
}

let nodeList=new LinkList(10);
nodeList.append(20);
nodeList.prepend(5);
nodeList.insertAtAnyPosition(15,2)
nodeList.deleteAtPosition(2);
nodeList.updateValue(1500,2);
nodeList.updateValue(1000,1);
nodeList.updateValue(500,0);
nodeList.print()