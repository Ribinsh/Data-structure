function heapSort(array) {
    // Build a max heap
    buildMaxHeap(array);
  
    // Heap sort
    for (let i = array.length - 1; i > 0; i--) {
      // Swap the first and last elements
      swap(array, 0, i);
  
      // Heapify the remaining elements
      heapify(array, 0, i);
    }
  
    return array;
  }
  
  function buildMaxHeap(array) {
    const mid = Math.floor(array.length / 2);
  
    for (let i = mid; i >= 0; i--) {
      heapify(array, i, array.length);
    }
  }
  
  function heapify(array, index, heapSize) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;
  
    if (left < heapSize && array[left] > array[largest]) {
      largest = left;
    }
  
    if (right < heapSize && array[right] > array[largest]) {
      largest = right;
    }
  
    if (largest !== index) {
      swap(array, index, largest);
      heapify(array, largest, heapSize);
    }
  }
  
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  
  const arr = [5, 2, 9, 1, 5, 6];
const sortedArray = heapSort(arr);
console.log(sortedArray); 
