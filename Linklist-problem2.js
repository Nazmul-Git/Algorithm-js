class Node{
    constructor(value,next=null){
        this.value=value;
        this.next=next;
    }
}

class LinkList{
    head;
    tail;
    length;
    constructor(value){
        let node= new Node(value)
        this.head=node;
        this.tail=node;
        this.length=1;
    }

    append(value){
        let node=new Node(value);
        this.tail.next=node;
        this.tail=node;
        this.length++
    }
    #findMedian(){
         console.log(this.length)
         let mid=this.length/2;
         if(this.length%2===0){
            return mid-1;
         }else{
            return Math.floor(mid);
         }
    }
    findMedianValue(){
        let mid=this.#findMedian();
        console.log(mid);
        let data=this.head;
        while(mid){
            data=data.next; 
            mid --;
        }
        console.log(data.value)
    }
    // findMedianValue(){
    //     let slowPointer=this.head;
    //     let fastPointer=this.head;
    //     while(slowPointer.next!==null && fastPointer!==null){
    //         slowPointer=slowPointer.next;
    //         fastPointer=fastPointer.next.next;
    //     }        
    //     console.log(slowPointer.value);
        
    // }
    print(){
        let data= this.head;
        while(data){
            // console.log(data.value);
            data=data.next;
        }
    }

}
let nodeList= new LinkList(100);
nodeList.append(200);
nodeList.append(300);
nodeList.append(400);
nodeList.append(500);
nodeList.append(600);
nodeList.append(700);
nodeList.findMedianValue()
nodeList.print();
