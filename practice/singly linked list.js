var head;

// creat Node 

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

 // print linked lists

const printList = () =>{
    let temp = head;
    while ( temp != null){
        console.log(temp.data+" ")
        temp = temp.next;
    }
}

// insert value biginning

const push = (newData)=>{
    let newNode = new Node(newData)
    newNode.next = head
    head = newNode
    
}

// insert Value After Node

const insertAfterNode = (prevData, newData)=>{
    if(prevData == null){
        console.log("Please give previous node data")
        return
    }
    const newNode = new Node(newData)
    newNode.next = prevData.next
        prevData.next = newNode
    
}



const insertAfter = (prevData, newData)=>{

    const newNode = new Node(newData)
    let temp = head;

    while (temp != null && temp.data != prevData){
        temp = temp.next
        
    }
    
    if(temp == null){
        return;
    }
      newNode.next = temp.next;
      temp.next = newNode;
    
    
    
}


const toArray = () =>{
    let temp = head;
    let arr = [];
    while ( temp != null){
        console.log(temp.data+" ")
        arr.push(temp.data)
        temp= temp.next
    }

    return arr;

}

// Insert Value to End

const append =(newData)=>{
    if (head == null){
        const head = new Node(newData)
        return
    }
    const newNode = new Node(newData)
    newNode.next = null
    
    let last = head
    while( last.next != null){
        last = last.next
    }
    last.next = newNode

}




var head = new Node(1)
const second = new Node(2)
const third = new Node(3)


head.next = second
second.next = third



console.log('Lists')
printList()
console.log('Inserted begining')
push(4)
printList()
console.log('Inserted after second')
insertAfterNode(second,5)
printList()
console.log('Inserted to end')
append(6)
printList()
insertAfter(2,7)
printList()

console.log(toArray());
console.log(toArray().reverse());
