
class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    push(data) {
        return this.items.push(data);
    }
    
    // remove element from the stack
    pop() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the stack
    size(){
        return this.items.length;
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }

    large(){
        let x= 1;

        this.items.forEach((element) =>{
            if(element>x){
                x=element;
            }
        })

        console.log(x);
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(8);
console.log(stack.items);

stack.pop();
console.log(stack.items);

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());


stack.large()
