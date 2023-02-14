
class Node {
    constructor(data){
       this.data = data
       this.left = null
       this.right =null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    insert(data) {
        let newNode = Node(data)

        if(this.root==null){
            this.root= newNode
        }else{
            this.insertData(this.root,newNode)
        }
    }


    insrtData(node,newNode){
        if(node.data > newNode.data){
            if(node.left==null){
                node.left= newNode
            }else{
                inserData(node.left , newNode)
            }
        }else{
            if(node.right==null){
                node.right = node
            }else{
                insertData(node.right , newNode)
            }
        }
    }
}
