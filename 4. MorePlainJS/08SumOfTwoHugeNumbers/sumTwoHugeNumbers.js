function sumTwoHugeNumbers(arr){
		var i;
		var j;
		var k;
		var temporaryVar;
		var fillingString = '';
		var remainder = '';
		var result = [];
		var diffLength = 0;
		var calc = 0;
		var remainderOfCalc = 0;
		var firstEl = arr[0].split('');
		var secondEl = arr[1].split('');
		var firstElLength = arr[0].length;
		var secondElLength = arr[1].length;

		if(firstElLength >= secondElLength){
			diffLength = firstElLength - secondElLength;
				for(i = 0; i < diffLength; i++){
		 		fillingString += 0;
			}
		}
		else {
			diffLength = secondElLength - firstElLength;
				for(i = 0; i < diffLength; i++){
		 			fillingString += 0;
				}
				
				//switch the elements from the arra -> the first one become the second and the second become first 
				temporaryVar = secondEl;
				secondEl = firstEl;
				firstEl = temporaryVar;
			}
			secondEl = secondEl.join('');
			secondEl = fillingString.concat(secondEl);
			secondEl = secondEl.split('')
			for(j = firstElLength - 1; j >= 0; j--){

				// Calculating the last elements of the strings, and push it into an array
				calc = parseInt(firstEl[j]) + parseInt(secondEl[j]);
				remainderOfCalc = calc % 10;
				result.push(remainderOfCalc)

				// Reset calc, remainderOfCals
				if(calc >= 10){
					firstEl[j - 1] = parseInt(firstEl[j - 1]) + 1;
				}
			calc = 0;
		}
	console.log(result.reverse().join(''))
}