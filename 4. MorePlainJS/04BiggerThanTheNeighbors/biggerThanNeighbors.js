function biggerThanNeighbors(index, arr) {
	switch (true) {
		case index === 0 || index === arr.length - 1  :
			console.log('Only one neighbor ');
			break;
		case arr[index] > arr[index + 1] && arr[index] > arr[index - 1] :
			console.log('Bigger');
			break;
		case arr[index] <= arr[index + 1] || arr[index] <= arr[index - 1] :
			console.log('Not Bigger');
			break;
		default : console.log('Invalid index');
			break;
	}
}