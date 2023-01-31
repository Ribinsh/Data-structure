let str = "hello kerala";
let k =str.split("")
let kl = str.split('').reverse().join("")
let ascii = []

k.forEach((value,index) =>{
    ascii.push(str.charCodeAt(index))
})

let as= []
  ascii.forEach((value)=>{
       as.push(value+2)
})

console.log(kl);
console.log(ascii);
console.log(as);

console.log(str[3]);

