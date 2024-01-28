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
nodeList.print()