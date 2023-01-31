

let selectionSort = function(arr){
     let n = arr.length
     var temp;

     for (var i =0; i<=n-1; i++){
        for (var j = i+1; j<=n;j++){

            if (arr[j]<arr[i]){
                temp = arr[j];
                arr[j]= arr[i];
                arr[i]= temp;
            }
        }
     }

     console.log(arr);
}


let arr = [3,6,1,9,6,3,1,9,5,3,5];

selectionSort(arr);