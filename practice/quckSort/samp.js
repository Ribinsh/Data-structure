

// we  have a given array
// choose an elment from the array as pivot element (we can choose any element)
// sort the pivot  element to its position,
//(partition) we have to move the larger element to right side and least element to left on the basis of the pivot
// create two loops for left side and right side sub arrays
//  recursively  call the same function for the sub arrays until all element is completed



function heapsort(array){
    createMinheap(array)

    for(let  i=array.length-1 ; i>0 ; i--){
        swap(array, 0 , i)

        heapify(array, 0 , i)
    }

return array
}


function createMinheap(array){
    let mid = Math.floor(array.length/2)

    for(let i = mid;i>=0 ;i--){
        heapify(array,i, array.length)
    }
}

function heapify(arr, index, size){
    let left = 2*index +1;
    let right = 2*index+2;
    let min = index;

    if(left<size && arr[left]< arr[min]){
        min = left
    }
    if(right<size && arr[right]< arr[min]){
        min = right
    }

    if(min !== index) {
        swap(arr , index, min);
        heapify(arr, min, size)
    }
}

function swap ( arr, i ,j){
    [arr[i] , arr[j] ] = [arr[j] , arr[i]]
}


let arr = [4,6,2,3,5,1,4]

let sorted = heapsort(arr)
console.log(sorted);