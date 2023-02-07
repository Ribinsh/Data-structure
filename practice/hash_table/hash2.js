let hashTable = [];

const hashFunction = (key) => {
  let index = 0;
  for (let i = 0; i < key.length; i++) {
    index += key.charCodeAt(i);
  }
  return index % hashTable.length;
};

const put = (key, value) => {
  let index = hashFunction(key);
  hashTable[index] = value;
};

const get = (key) => {
  let index = hashFunction(key);
  return hashTable[index];
};

put("name", "Ribin");
console.log(get("name"));



