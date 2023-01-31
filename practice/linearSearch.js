
let arr = [3,4,6,7,8,2,34,7]


function linearSearch(arr, item) {
    // Go through all the elements of arr to look for item.
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) { // Found it!
        console.log(i);
      }
    }
    
    // Item not found in the array.
    return null;
  }

  linearSearch(arr,8)