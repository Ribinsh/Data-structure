




function bubbleSort( arr)
{
var i, j;
let n = arr.length
for (i = 0; i <n; i++)
{
	for (j = 0; j < n-i-1; j++)
	{
		if (arr[j] > arr[j+1])
		{
		var temp = arr[j+1];
		arr[j+1] = arr[j];
		arr[j] = temp;
		
		}
	}

}
 console.log(arr);
}

/* Function to print an array */
  let arr = [8,5,9,3,7,0,2,5,3]

  
	


	bubbleSort(arr);
	




