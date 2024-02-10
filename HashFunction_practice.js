class HashFunction{
    constructor(size){
        this.size=size;
        this.array=new Array(size).fill([]);
    }
    #hashFnc(value){
        value=value+'';
        let sum=0;
        for(let i=0; i<value.length; i++){
            sum+=value.charCodeAt(i);
        }
        return sum % this.size;
    }
    set(value){
        let index=this.#hashFnc(value);
        console.log(index);
        let innerArr=[...this.array[index]];
        innerArr.push(value);
        this.array[index]=innerArr;
    }
}
let hash=new HashFunction(5);
// hash.set(10);
hash.set('sunny');
hash.set('javaScript');
hash.set('TypeScript');
hash.set('sun');
hash.set('dhaka');
hash.set('bangladesh');


console.log(hash);