function riverSizes(matrix) {
    const sizes = [];  
    const visited = []; 
    
    // initialize the visited matrix with false values
    for (let i = 0; i < matrix.length; i++) {
      visited.push(Array(matrix[0].length).fill(false));
    }
    
    // DFS function to traverse the matrix and count the size of each river
    function traverse(i, j, size) {
      if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length || visited[i][j] || matrix[i][j] === 0) {
        return;  // out of bounds or already visited or not part of a river
      }
      visited[i][j] = true;  // mark the cell as visited
      size++;  // increment the size of the current river
      traverse(i-1, j, size);  // up
      traverse(i+1, j, size);  // down
      traverse(i, j-1, size);  // left
      traverse(i, j+1, size);  // right
    }
    
    // loop through all cells in the matrix
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (!visited[i][j] && matrix[i][j] === 1) {
          // found a new river, start DFS from this cell
          let size = 0;
          traverse(i, j, size);
          sizes.push(size);  // add the size of the river to the array
        }
      }
    }
    
    return sizes;
  }

  let mt = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
  ];

  console.log(riverSizes(mt));
  