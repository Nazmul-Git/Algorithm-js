class Graph {
  constructor() {
    this.graph = {};
  }

  addEdge(a, b, direct = false) {
    if (this.graph[a]) {
      this.graph[a].push(b);
    } else {
      this.graph[a] = [b];
    }

    if (!direct) {
      if (this.graph[b]) {
        this.graph[b].push(a);
    }
    else{
        this.graph[b] = [a];
    }
    }
  }
}
let graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.addEdge(3, 5);
graph.addEdge(4, 6);
graph.addEdge(5, 6);
console.log(graph);
