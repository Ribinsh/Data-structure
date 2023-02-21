class MaxBinaryHeap {
    constructor(element) {
        this.values = element;
    }

    insert(element) {
        this.values.push(element);
        this.insertUp();
    }

    insertUp() {
        let index = this.values.length - 1;
        const element = this.values[index]
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) {
                break;
            } else {
                this.values[parentIndex] = element;
                this.values[index] = parent;
                index = parentIndex;

            }
        }
        console.log(this.values);
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown() {
        let index = 0
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
        console.log(this.values);
    }
}

let arr = [55, 39, 41, 18, 27, 12, 33]
let heap = new MaxBinaryHeap(arr);
// heap.insert(55)
// heap.insert(1)
heap.insert(100)
heap.extractMax()
heap.extractMax()
