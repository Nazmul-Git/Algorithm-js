

class Graph{
    constructor(){
        this.graph={};
    }
    addEdge(x,y,dir=false){
        if(this.graph[x]) this.graph[x].push(y);
        else this.graph[x]=[y];

        if(!dir){
            // console.log('direct ? = ',dir)
            if(this.graph[y]) this.graph[y].push(x);
            else this.graph[y]=[x];
        }
    }
}
let graph= new Graph();
graph.addEdge(1,2);
console.log(graph);