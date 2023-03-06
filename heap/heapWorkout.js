class heap {
    constructor(element) {
        this.value = element;
    }

    check() {
        let root = this.value[0];
        let leftChild = this.value[1];
        let rightChild = this.value[2];
        if (root > leftChild && root > rightChild) {
            console.log("max heap");
        } else {
            console.log("Min heap");
        }
    }

    isMinHeap(arr) {
        for (let i = 0; i < arr.length; i++) {
         
          if (2 * i + 1 < arr.length && arr[2 * i + 1] < arr[i]) {
            return false;
          }
        
          if (2 * i + 2 < arr.length && arr[2 * i + 2] < arr[i]) {
            return false;
          }
        }
        return true;
      }
}

let arr = [1, 5, 10, 6, 8, 12, 15]
let a = new heap(arr);
a.check();

let ar = [20,15,18,10,8,16,17]
let b = new heap(ar)
b.check();

let arr1 =[6,-3,5,1,8]