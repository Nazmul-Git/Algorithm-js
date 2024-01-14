
// let LinkListStructure={
//     head:{
//         value:100,
//         next:{
//             value:200,
//             next:{
//                 value:300,
//                 next:null
//             }
//         }
//     },
//     tail:{
//         value:300,
//         next:null
//     },
//     length:2
// }



////////////////////////////////////////////

class Node {
    constructor(value,next=null){
        this.value=value;
        this.next=next;
    }
}

class LinkList {
    head;
    tail;
    length;
    constructor(value){

        let node=new Node(value)
        this.head=node;
        this.tail=node;
        this.length=1;
        // console.log('This : ',this);
    }
    append(value){ 
        let node=new Node(value)
        this.tail.next=node;
        this.tail=node;
        this.length++;
    }
    prepend(value){
        let node = new Node(value,this.head);
        this.head=node;
    }

    #getPrevious(index){
        index--;
        let data=this.head;
        console.log(data)
        while(index){
            data=data.next;
            index--;
        }
        console.log(data);
    }
    insertAtPosition(value, index){
        if(index===0) this.prepend(value);
        else if(index===this.length) this.append(value);
        else{
            // run loop & find previous idx
            this.#getPrevious(index);
        }
    }
    print(){
        let data=this.head;
        // console.log(data);
        while(data){
            console.log(data.value);
            data=data.next;
        }
    }
}

let list=new LinkList(100);
list.append(200);
list.append(300);
list.append(400);
list.append(500);
list.append(600);
list.prepend(10);
list.append(700)
list.insertAtPosition(550,2)
list.print();