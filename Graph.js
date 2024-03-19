

class Graph{
    constructor(){
        this.graph={};
    }

    addEdge(a,b){
        if(this.graph[a]){
            this.graph[a].push(b);
        }
        else{
            this.graph[a]=[b];
        }
    }
}
let graph= new Graph();
graph.addEdge(1,2);
graph.addEdge(2,1);
graph.addEdge(1,3);
graph.addEdge(3,1);
graph.addEdge(1,5);
graph.addEdge(5,1);
graph.addEdge(3,5);
graph.addEdge(5,3);
graph.addEdge(5,6);
graph.addEdge(6,5);
graph.addEdge(3,4);
graph.addEdge(4,3);
graph.addEdge(4,2);
graph.addEdge(2,4);
graph.addEdge(2,3);
graph.addEdge(6,4);
graph.addEdge(4,6);
graph.addEdge(3,2);
console.log(graph);
