
let binarySearch = function (arr,value,start,end){

    if(start>end){
        return false 
    }

    let mid = Math.floor((start+end)/2);

    if (arr[mid]=== value){
        console.log("element found at "+ mid);
    }

    if(arr[mid]<value){
        return binarySearch(arr,value,mid+1,end);
    }else{
        return binarySearch(arr,value,start,mid-1);
    }

}


let arr = [2,4,5,6,7,9];
let start= 0;
let end = arr.length-1

binarySearch(arr,2,start,end);
