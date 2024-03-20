

class Graph{
    constructor(){
        this.graph={};
    }
    addEdge(x,y,dir=false){
        if(this.graph[x]) this.graph[x].push(y);
        else this.graph[x]=[y];
    }
}
let graph= new Graph();
graph.addEdge(1,2);
console.log(graph)