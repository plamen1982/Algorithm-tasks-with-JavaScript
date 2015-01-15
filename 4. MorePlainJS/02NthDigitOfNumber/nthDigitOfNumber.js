function findNthDigit(arr){
	var i;
	var firstElement = arr[0];
	var regex = /\d/g;
	var secondElement = arr[1].toString().match(regex);
	if(firstElement > secondElement.length){
		console.log('The number doesn\'t have ' + firstElement + ' numbers');
	}
	console.log(secondElement[secondElement.length - firstElement]);
}