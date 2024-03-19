class Graph {
  constructor() {
    this.graph = {};
  }

  addEdge(a, b, undirected) {
    if (this.graph[a]) {
      this.graph[a].push(b);
    } else {
      this.graph[a] = [b];
    }

    // console.log(undirected);
    if (undirected) {
    //   console.log(undirected);
        if (this.graph[b]) {
            this.graph[b].push(a);
        } else {
            this.graph[b] = [a];
        }
    }else{
        this.graph[b]=[];
    }
  }
}
let graph = new Graph();
// undirected
// graph.addEdge(1, 2, true);
// graph.addEdge(1, 3, true);
// graph.addEdge(1, 5, true);
// graph.addEdge(2, 3, true);
// graph.addEdge(2, 4, true);
// graph.addEdge(3, 4, true);
// graph.addEdge(3, 5, true);
// graph.addEdge(4, 6, true);
// graph.addEdge(5, 6, true);
// graph.addEdge(7, 6, false);

// directed
graph.addEdge(1,2, false);
graph.addEdge(4,2, false);
graph.addEdge(4,3, false);
graph.addEdge(3,2, false);
console.log(graph);
