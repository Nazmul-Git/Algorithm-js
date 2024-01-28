// var mergeTwoLists = function(list1, list2) {
    
// };
// console.log(mergeTwoLists([1,3,4],[1,4,5]));

class Node {
    constructor(value, next=null){
        this.value=value;
        this.next=next;
    }
}

class LinkList{
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
        let node=new Node(value);
        this.tail.next=node;
        this.tail=node;
        // console.log(node);
    }
    appendMultiple(arr){
        for(let i=1; i<arr.length; i++){
            this.append(arr[i]);
        }
    }
    prepend(value){
        let node=new Node(value, this.head);
        this.head=node;
    }
    #getPreviousIndex(index){ //4
        index--; //3
        let data=this.head; //head node
        while(index){  //3->2->1
            data=data.next;  // head node  = node er next 
            index--; //2->1
        }
        return data;
    }
    insertAtPosition(value, index){
        let previousNode=this.#getPreviousIndex(index);
        let node= new Node(value,previousNode.next);
        previousNode.next=node;
    }
    print(){
        let data=this.head;
        console.log(data);
        while(data){
            console.log(data.value)
            data=data.next;
        }
        
    }
}
let nodeList=new LinkList(10);
nodeList.append(20);
nodeList.appendMultiple([30,40,50]);
nodeList.prepend(1)
nodeList.insertAtPosition(45,4);
nodeList.print()