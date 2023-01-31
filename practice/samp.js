



// let myPromies = new Promise((resolve,reject)=>{
//         let a = 4
//         let b = 5
//         let c= a+b;
//         if(c>=10){
//             resolve (c);
//         }
//         else{
//             reject(a)
//         }
    
   
// }).then((value) =>{
//     console.log(value);
// })


// let arr = [3,4,6,7,4]

// let b = arr.filter((data) =>{
//     return(data>=5)
// })

// console.log(b);



let arr = [2,4,5,67,8];

let b= arr.reduce((value,sum =0,total=0)=>{

    sum= sum+1;
    total= total+value
    return total/sum 

})

console.log(b);
