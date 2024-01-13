
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
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class LinkList {
    head;
    tail;
    length;
    constructor(value){
        // let node={
        //     value:value,
        //     next:null
        // }
        let node=new Node(value,null)
        this.head=node;
        this.tail=node;
        this.length=1;
        // console.log('This : ',this);
    }
    append(value){ 
        let node={
            value:value, 
            next:null
        }
        this.tail.next=node;
        this.tail=node;
        this.length++;
    }

    print(){
        let data=this.head;
        while(data.next != null){
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
list.print();