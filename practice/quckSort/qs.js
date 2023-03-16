function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
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
  
  function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
      index = partition(items, left, right);
      console.log(index);
      if (left < index - 1) {
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        quickSort(items, index + 1, right);
      }
    }
    return items;
  }
  
 let items = [5, 3, 7, 6, 2, 9,10, 45];
 let sortedArray = quickSort(items, 0, items.length - 1);
  console.log(sortedArray);