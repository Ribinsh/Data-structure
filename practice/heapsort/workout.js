

function heapSort(array){

maxHeap(array)

for(let i = array.length-1; i>0 ; i--){
    swap(array , 0, i)

    heapify(array ,0, i )
}

return array

}

function maxHeap(array){
    let mid = Math.floor(array.length/2)
     
    for(let i=mid;i>=0; i--){
        heapify(array, i , array.length)
    }
}

function heapify(array, index, size){
    let leftNode = 2*index+1;
    let rightNode = 2*index+2;
    let largest = index;

    if(leftNode< size && array[leftNode] > array[largest]){
        largest = leftNode
    }

    if(rightNode< size && array[rightNode] > array[largest]){
        largest = rightNode
    }

    if(largest !== index){
        swap(array , index, largest)
        heapify(array, largest, size)
    }
}

function swap ( array, i , j){
    [array[i], array[j]] = [array[j], array[i]]
}

const arr = [5, 2, 9, 1, 5, 6];
 
 console.log(heapSort(arr));