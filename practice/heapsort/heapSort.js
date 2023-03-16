function heapPush(heap, newKey) {
    heap.push(newKey);
  
    let curr = heap.length - 1;
  
    while (curr > 0) {
      let parent = Math.floor((curr - 1) / 2);
      if (heap[curr] < heap[parent]) {
        [heap[curr], heap[parent]] = [heap[parent], heap[curr]];
        curr = parent;
      } else {
        break;
      }
    }
  }
  


  function heapPop(heap) {
    const n = heap.length;
    [heap[0], heap[n - 1]] = [heap[n - 1], heap[0]];
    const removedKey = heap.pop();
  
    let curr = 0;
  
    while (2 * curr + 1 < heap.length) {
      const leftIndex = 2 * curr + 1;
      const rightIndex = 2 * curr + 2;
      const minChildIndex =
        rightIndex < heap.length && heap[rightIndex] < heap[leftIndex]
          ? rightIndex
          : leftIndex;
  
      if (heap[minChildIndex] < heap[curr]) {
        [heap[minChildIndex], heap[curr]] = [heap[curr], heap[minChildIndex]];
        curr = minChildIndex;
      } else {
        break;
      }
    }
  
    return removedKey;
  }


  function heapSort(heap) {
    const n = heap.length;

    for(let i=n-1; i>0; i--){
        [heap[0], heap[i]] = [heap[i], heap[0]];
        
        let curr = 0;
      
        while (2 * curr + 1 < n) {
          const leftIndex = 2 * curr + 1;
          const rightIndex = 2 * curr + 2;
          const minChildIndex =
            rightIndex < heap.length && heap[rightIndex] < heap[leftIndex]
              ? rightIndex
              : leftIndex;
      
          if (heap[minChildIndex] < heap[curr]) {
            [heap[minChildIndex], heap[curr]] = [heap[curr], heap[minChildIndex]];
            curr = minChildIndex;
          } else {
            continue;
          }
        }
    }
    
    return heap
  
   
  }


   let heap1 = [];
  heapPush(heap1 , 9);
  heapPush(heap1 , 2);
  heapPush(heap1 , 1);
  heapPush(heap1 , 10);
  heapPush(heap1 , 5);
  heapPush(heap1 , 8);


  console.log(heap1);
  console.log(heapSort(heap1));



