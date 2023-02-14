class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    //method to insert a node in tree
    insert(data) {
      let newNode = new Node(data);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
          if (node.left === null) {
            node.left = newNode;
          } else {
            this.insertNode(node.left, newNode);
          }
        } else {
          if (node.right === null) {
            node.right = newNode;
          } else {
            this.insertNode(node.right, newNode);
          }
        }
      }

      preorder(node){ 

        if(node != null){
            console.log(node.data);
            this.preorder(node.left)
            this.prerder(node.right)
        }
      }

      inorder(node){
        if(node != null){
            this.inorder(node.left)
            console.log(node.data);
            this.inorder(node.right)
        }
      }

      postorder(node){
        if(node != null){
           
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.data);
        }
      }
    
      // returns root of the tree
      getRootNode() {
        return this.root;
      }
    
      // method to remove a node with given data
      remove(data) {
        this.root = this.removeNode(this.root, data);
      }
    
      
      removeNode(node, key) {
        if (node === null) {
          return null;
        } else if (key < node.data) {
          node.left = this.removeNode(node.left, key);
          return node;
        } else if (key > node.data) {
          node.right = this.removeNode(node.right, key);
          return node;
        } else {
          if (node.left === null && node.right === null) {
            node = null;
            return node;
          }
          if (node.left === null) {
            node = node.right;
            return node;
          } else if (node.right === null) {
            node = node.left;
            return node;
          }
    
          let aux = this.findMinNode(node.right);
          node.data = aux.data;
    
          node.right = this.removeNode(node.right, aux.data);
          return node;
        }
      }

      findMinNode(node) {
        if (node.left === null)  console.log(node.data);
        else return this.findMinNode(node.left);
      }

      find(value) {
        let currentNode = this.root;
    
        while (currentNode) {
          if (value < currentNode.value) {
            currentNode = currentNode.left;
          } else if (value > currentNode.value) {
            currentNode = currentNode.right;
          } else {
            return currentNode;
          }
        }
    
        return null;
      }


       
    }

     





let bst = new BinarySearchTree()

bst.insert(5)
bst.insert(9)
bst.insert(3)
bst.insert(8)

console.log(bst);
console.log("preorder");
bst.postorder(bst.root)
console.log("inorder");
bst.inorder(bst.root)
console.log("post order");
bst.postorder(bst.root)


