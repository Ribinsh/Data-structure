

// function insertionSorting(arr){

//     let n = arr.length

//     let i,j,key;

//     for(i=1;i<n;i++){
//         key = arr[i]
//         j=i-1

//         while(j>=0 && arr[j]>key){
//             arr[j+1] = arr[j];
//             j= j-1
//         }
        
//         arr[j+1] = key

//     }
    
// }

// let arr =[8,5,3,9,1,7];
// console.log(arr);

// insertionSorting(arr)

// console.log(arr);



function binarySearch(arr,value,first,end){
    

    if(first>end) return false

    let mid = Math.floor((first+end)/2);

    if(arr[mid]===value){
        return console.log("position  "+ mid);
    }

    if(arr[mid]< value){
        return binarySearch(arr,value,mid+1,end)
    }else{
        return binarySearch(arr,value,first,mid-1)
    }
    
}

let arr =[3,4,5,6,7,8,9,0]

let f= 0;
let l= arr.length-1
console.log(arr);

binarySearch(arr,7,f,l)