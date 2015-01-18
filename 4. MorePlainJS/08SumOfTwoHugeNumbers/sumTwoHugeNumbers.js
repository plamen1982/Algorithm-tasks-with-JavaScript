function sumTwoHugeNumbers(arr){
		var i;
		var j;
		var k;
		var fillingString = '';
		var remainder = '';
		var result = [];
		var diffLength = 0;
		var calc = 0;
		var remainderOfCalc = 0;
		var firstEl = arr[0];
		var secondEl = arr[1];
		var firstElLength = arr[0].length;
		var secondElLength = arr[1].length;

		if(firstElLength >= secondElLength){
			diffLength = firstElLength - secondElLength;
				for(i = 0; i < diffLength; i++){
		 		fillingString += 0;
			}
			secondEl = fillingString.concat(secondEl)
			for(j = firstElLength - 1, k = 1; j > 0, k < firstElLength; j--, k++){

				// Calculating the last elements of the strings, and push it into an array
				calc = parseInt(firstEl[firstElLength - k]) + parseInt(secondEl[firstElLength - k]);
				remainderOfCalc = calc % 10;
				result.push(remainderOfCalc)
				// Reset calc, remainderOfCals
				if(calc > 10){
					firstEl = firstEl.split('');
					firstEl[firstElLength - k - 2] = parseInt(firstEl[firstElLength - k - 2]) + 1;
					firstEl = firstEl.join('');
				}
				calc = 0;
			}
			console.log(result.reverse().join(''))
		}
		else {
			diffLength = secondElLength - firstElLength;
				for(i = 0; i < diffLength; i++){
		 			fillingString += 0;
		}
	}
}