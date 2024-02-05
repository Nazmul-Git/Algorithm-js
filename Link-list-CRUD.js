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
    print(){
        let data = this.head;
        // console.log(data)
        while(data){
            console.log(data.value);
            data=data.next;
        }
    }
    append(value){
        let node = new Node(value);
        this.tail.next=node;
        this.tail=node;
        this.length++;
    }
    appendMultiple(arr){
        for(let i=0; i<arr.length; i++){
            this.append(arr[i]);
        }
    }
    prepend(value){
        let node= new Node(value, this.head);
        this.head=node;
        this.length++;
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
        return data;
        
    }

    insertAtAnyPosition(value, index){
        if(index===0) this.prepend(value);
        else if(index=== this.length) this.append(value);
        else{
            let previousNode=this.#getPreviousNode(index);
            let newNode=new Node(value,previousNode.next);
            previousNode.next=newNode;
            this.length++;
        }
    }

    deleteAtPosition(index){
        if(index===0){
            this.head=this.head.next;
        }else if(index===this.length-1){
            let previousNode=this.#getPreviousNode(index);
            previousNode.next=null;
            this.tail=previousNode;
        }else{
            let previousNode=this.#getPreviousNode(index);
            previousNode.next=previousNode.next.next;
        }
        this.length--;
    }

    updateValue(val,idx){
        let currNode=this.#getCurrentNode(idx);
        // console.log(currNode);
        currNode.value=val;
    }

    linkListReverse(){
        console.log('length is = ',this.length)
        if(this.length===1) return;
        else if(this.length===2){}
        else{
            let previousNode=this.head;
            let currentNode=this.head.next;
            while(currentNode){
                let nextNode=currentNode.next;
                currentNode.next=previousNode;
                previousNode=currentNode;
                currentNode=nextNode;
            }
            this.head.next=null;
            this.head=previousNode;
        }
    }   
}

let nodeList=new LinkList(10);
nodeList.append(20);
nodeList.prepend(-10);
nodeList.insertAtAnyPosition(15,2)
nodeList.updateValue(150,2);
nodeList.updateValue(100,1);
nodeList.appendMultiple([200,250,300])
// nodeList.deleteAtPosition(0);
// nodeList.updateValue(500,0);
// nodeList.updateValue(30000,6);
nodeList.linkListReverse();
nodeList.print()