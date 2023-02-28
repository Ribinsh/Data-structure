class Graph {
    constructor() {
      this.vertices = {};
    }
  
    addVertex(vertex) {
      this.vertices[vertex] = [];
    }
  
    addEdge(vertex1, vertex2) {
      this.vertices[vertex1].push(vertex2);
      this.vertices[vertex2].push(vertex1);
    }
  
    removeVertex(vertex) {
      const adjVertices = this.vertices[vertex];
      for (let i = 0; i < adjVertices.length; i++) {
        const adjVertex = adjVertices[i];
        this.removeEdge(vertex, adjVertex);
      }
      delete this.vertices[vertex];
    }
  
    removeEdge(vertex1, vertex2) {
      this.vertices[vertex1] = this.vertices[vertex1].filter((v) => v !== vertex2);
      this.vertices[vertex2] = this.vertices[vertex2].filter((v) => v !== vertex1);
    }
  }


 
  
  
  

  const myGraph = new Graph();

myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");

myGraph.addEdge("A", "B");
myGraph.addEdge("B", "C");

console.log(myGraph.vertices);



myGraph.removeVertex("B");

console.log(myGraph.vertices);

