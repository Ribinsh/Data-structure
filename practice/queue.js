

class queue {
    constructor(){
        this.items = []
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        if(this.items.length>0){
            this.items.shift();
        }
    }

    peek(){
        if(this.items.length>0){
            console.log(this.items[0]);
        }
    }

}

let q = new queue();

q.enqueue(3);
q.enqueue(5);
q.enqueue(6);

console.log(q.items);

q.dequeue()
console.log(q.items);

q.peek()