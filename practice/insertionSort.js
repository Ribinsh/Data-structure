

function insertionSort(arr, n)
{
	let i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;

		
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}


function printArray(arr)
{
    console.log(arr);
}


	let arr = [12, 11, 13, 5, 6 ];
	let n = arr.length;


    printArray(arr);
	insertionSort(arr, n);
	printArray(arr);
	



