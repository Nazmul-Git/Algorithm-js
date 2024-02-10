class HashFunction{
    constructor(size){
        this.size=size;
        this.arr=new Array(size).fill([]);
    }

}
let hash= new HashFunction(10);
console.log(hash);