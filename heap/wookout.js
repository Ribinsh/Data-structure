

function maxheap(heap, value){
    
    heap.push(value)

    let current = heap.length-1

    while(current>0){
        let parrent = Math.floor((current-1)/2)

        if(heap[parrent]<heap[current]){
            [[heap[parrent]] , [heap[current]]] = [[heap[current]], [heap[parrent]]]
            current = parrent
        }else{
            break;
        }
    }
}

function findTop3LargestNumbers(maxHeap) {
    const top3 = [];
    while (top3.length < 3) {
      const max = maxHeap.extractMax();
      if (max === null) {
        break;
      }
      top3.push(max);
    }
    return top3;
  }
   
 


let heap1 =[]

maxheap(heap1,6)
maxheap(heap1,3)
maxheap(heap1,-7)
maxheap(heap1,1)
maxheap(heap1,9)



findTop3LargestNumbers(heap1)
console.log(heap1);