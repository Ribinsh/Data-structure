function bfs(graph, start) {
    const visited = new Set(); 
    const queue = [];
    queue.push(start);
    visited.add(start);
  
    while (queue.length > 0) {
      const currentNode = queue.shift(); 
      console.log(currentNode); 
  
      
      graph[currentNode].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
  }


  function dfs(graph, start, visited = new Set()) {
    
    console.log(start); 
    visited.add(start);
  
 
    graph[start].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        dfs(graph, neighbor, visited);
      }
    });
  }

  function bfs_shortest_path(graph, start, end) {
    const visited = new Array(graph.length).fill(false); // Mark all vertices as not visited
    const queue = []; // Create a queue for BFS
    const parent = new Array(graph.length).fill(-1); // Parent array to keep track of the path
  
    queue.push(start); // Enqueue the starting vertex
    visited[start] = true;
  
    while (queue.length > 0) {
      const currentVertex = queue.shift(); // Dequeue a vertex from the queue
  
      if (currentVertex === end) {
        // If the destination vertex is found, backtrack to construct the path
        const path = [];
        let v = end;
        while (v !== -1) {
          path.push(v);
          v = parent[v];
        }
        return path.reverse();
      }
  
      // Visit all the neighbors of the current vertex
      for (const neighbor of graph[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          parent[neighbor] = currentVertex;
          queue.push(neighbor);
        }
      }
    }
  
    return []; // If the destination vertex is not found, return an empty path
  }
  
  
  
  
  
  
  const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"]
  };
  
  console.log("breadth first search");
  bfs(graph, "B");
  console.log("depth first search")
  dfs(graph, "A")
  