class Graph {
  constructor() {
    this.graph = {};
    this.visited={};
    this.queue=[];// queue for bfs
  }

  addEdge(a, b, undirected) {
    //visited for traverse
    this.visited[a]=false;
    this.visited[b]=false;

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

  bfs(source){
    // console.log(this.visited);
    this.queue.push(source);

    while(this.queue.length){
      // console.log(this.queue); //[6]
      let data=this.queue.shift();
      // console.log(this.queue);//[]
      // console.log(data);//6
      this.visited[data]=true;
      let arr= this.graph[data];
      for(let i=0; i<arr.length; i++){
        // console.log(arr[i]);
        if(!this.visited[arr[i]]){
          this.queue.push(arr[i]);
          this.visited[arr[i]]=true;
        } 
      }
      // console.log(this.queue);
    }
    return this.visited;
  }
}
let graph = new Graph();
// undirected
graph.addEdge(1, 2, true);
graph.addEdge(1, 3, true);
graph.addEdge(1, 5, true);
graph.addEdge(2, 3, true);
graph.addEdge(2, 4, true);
graph.addEdge(3, 4, true);
graph.addEdge(3, 5, true);
graph.addEdge(4, 6, true);
graph.addEdge(5, 6, true);


// directed
// graph.addEdge(1,2, false);
// graph.addEdge(4,2, false);
// graph.addEdge(4,3, false);
// graph.addEdge(3,2, false);
// console.log(graph);

console.log(graph.bfs(6));
console.log(graph)
