class HashFunction{
    constructor(size){
        this.size=size;
        this.arr=new Array(size).fill([]);
    }
    #hashFnc(value){
        let sum=0;
        // value=value+'';
        for(let i=0;i<value.length;i++){
            sum+=value.charCodeAt(i);
        }
        return sum % this.size;
    }
    set(value){
        let index=this.#hashFnc(value);
        console.log(index)
        let innerArr=[...this.arr[index]];
        // console.log(innerArr);
        innerArr.push(value)
        this.arr[index]=innerArr;
        
    }
    get(value){
        let index=this.#hashFnc(value);
        let innerArr=[...this.arr[index]];
        for(let ch of innerArr){
            if(ch===value) return true;
        }
        return false;
    }

}
let hash= new HashFunction(10);
// console.log(hash);
hash.set('sunny');
hash.set('dhaka');
hash.set('bangladesh');
console.log(hash.get('sunny')); //true
console.log(hash.get('Canada')); //false
hash.set(500);
console.log(hash);