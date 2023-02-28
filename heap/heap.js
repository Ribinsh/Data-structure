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

  

  

  



  let heap1 = [];
  let heap2 = []
  
  heapPush(heap1 , 9);
  heapPush(heap1 , 2);
  heapPush(heap1 , 1);
  heapPush(heap1 , 10);
  heapPush(heap1 , 5);
  heapPush(heap1 , 8);

  heapPush(heap2, 5)
  heapPush(heap2, 6)
  heapPush(heap2, 7)
  heapPush(heap2, 8)

//   heapPop(heap1 );
  
 

  console.log(heap2 );
