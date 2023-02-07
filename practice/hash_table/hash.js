class HashTable {
    constructor() {
      this.table = new Array(127);
      this.size = 0;
    }
  
    hash(key) {
      let index = 0;
      for (let i = 0; i < key.length; i++) {
        index += key.charCodeAt(i);
      }
      return index % this.table.length;
    }
  
    set(key, value) {
      const index = this.hash(key);
      this.table[index] = [key, value];
      this.size++;
    }
  
    get(key) {
      const target = this.hash(key);
      return this.table[target];
    }

    sort(){
        
        for(let i=0;i<this.table.length;i++){
            for(let j= i+1; j<=this.table.length;j++){
                if(this.table[i]>this.table[j]){
                    let temp = this.table[i];
                    this.table[i] = this.table[j];
                    this.table[j] = temp;
                }
            }
        }
        return this.table
    }
  
    remove(key) {
      const index = this.hash(key);
  
      if (this.table[index] && this.table[index].length) {
        this.table[index] = [];
        this.size--;
        return true;
      } else {
        return false;
      }
    }
  }
  
  const ht = new HashTable();
  
  ht.set("Canada", 300);
  ht.set(7, 100);
  
  console.log(ht.get("Canada"));
  console.log(ht.get(7));
  console.log(ht.remove("Canada"));
  console.log(ht.sort());
 console.log(ht);
  