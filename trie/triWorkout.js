
class Node {
    constructor(value){
        this.value = value;
        this.isEnd = false;
        this.children = {}
    }
}


class trie {
    constructor(){
        this.root = new Node(null)
    }


    insert(word){
        let current = this.root;

        for (let character of word){
            if(current.children[character === undefined]){
                current.children[character] = new Node(character)
            }
            current = current.children[character]
        }

        current.isEnd = true;
    }


    search(word){
        let current = this.root

        for(let character of word){
            if(current.children[character] === undefined){
                console.log("No words");
            }else{
              for(let j = current.children[] )

                for( let i = current ; i< false ; i++ ){

                }
            }
        }
    }
}