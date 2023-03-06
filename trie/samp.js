  class tri{

     node = new Node()

      constructor(){
            this.root = [null]
            this.children
      }

     insert (word){
       let current = this.root

       for(let character of word) {
        if(current.children[character] === undefined) {
            current.children[character] = newNode(character)
        }

        current = current.children[character]

       }
      }
  }

   let trie = new tri()
    trie.insert("name")