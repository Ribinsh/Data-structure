function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
      index = partition(items, left, right);
    
      if (left < index - 1) {
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        quickSort(items, index + 1, right);
      }
    }
    return items;
  }

  function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)];
     let i = left;
     let j = right;
  
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j);
        i++;
        j--;
      }
    }
    
    return i;
  }
  

  function swap(items, leftIndex, rightIndex) {
   [items[leftIndex] , items[rightIndex]] = [items[rightIndex] , items[leftIndex]]
  }

  let arr = [8,0,5,6,2,7,1];
 let sortedArray = quickSort(arr, 0, arr.length - 1);
  console.log(sortedArray);