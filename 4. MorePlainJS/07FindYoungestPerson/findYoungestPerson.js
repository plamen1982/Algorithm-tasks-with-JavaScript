function youngestPerson(arr){
	var i;
	var youngestOne;
	var indexYoungesOne = -1;
	var currentPerson = Number.MAX_VALUE;
	for(i in arr){
		if(currentPerson > arr[i].age){
			currentPerson = arr[i].age;
			youngestOne = arr[i];
		}
	}
	console.log('The youngest person is ' + youngestOne.firstname + ' '  + youngestOne.lastname)
}