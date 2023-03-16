

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

function extractMax(heap) {
    let max = heap[0]
  
    console.log(max);
     
    let l = heap.length-1;

[ heap[0], heap[l]] = [ heap[l], heap[0] ];
    heap.pop() 
  let current = 0

  while( 2*current+1 < heap.length){
    let leftChild = 2*current+1  
    let rightChild = 2* current+2

    let minIndex = leftChild < rightChild ? leftChild : rightChild

    if(heap[current]< heap [minIndex]){
        [heap[current] , heap[minIndex]] = [heap[minIndex] , heap[current]]
        current = minIndex
    }else{ 
        break;
    }

  }
    return max ;
    

}

function extractKValues (heap ,k) {
    let arr = []
      for ( let i=0 ; i<k ; i++){
        arr.push(extractMax(heap))
      }

      console.log(arr);
}







let heap1 =[]

maxheap(heap1,6)
maxheap(heap1,3)
maxheap(heap1,-7)
maxheap(heap1,1)
maxheap(heap1,9)

// extractMax(heap1)

console.log(heap1);

extractKValues(heap1,3)