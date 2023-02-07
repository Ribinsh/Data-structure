class HashTable {
    constructor() {
      this.table = {};
    }

    hash(key){
        let k = 0;
        for (let i = 0; i < key.length; i++) {
            k += key.charCodeAt(i);
          }
          return k
    }


    put(key, value) {
        let hash =this.hash(key);
      this.table[hash] = value;
    }
    get(key) {
     let hash =this.hash(key);
      return this.table[hash];
    }
  }

  const hashTable = new HashTable();
hashTable.put("name", "Ribinsh");
hashTable.put("age", 24);
console.log(hashTable.get("name")); 
console.log(hashTable.get("age")); 
