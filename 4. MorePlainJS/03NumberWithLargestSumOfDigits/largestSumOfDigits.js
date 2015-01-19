function findLargestBySumOfDigits(nums){
	var i;
	var j;
	var splitArgs;
	var result;
	var theBiggest = Number.MIN_VALUE;
	var minusIndexes = [];
	var index;
	var current = 0;
	console.log();
	for(i = 0; i < arguments.length; i++){

		if( typeof(arguments[i]) == 'string'){

			return 'undefined'
		}
		if(arguments[i] % 1 !== 0){
			return 'undefined'
		}
		if(arguments[i] < 0){
			minusIndexes.push([arguments[i],i]);
			arguments[i] = arguments[i]*( - 1 );
		}
		if(typeof (arguments[i]) === 'number'){
			splitArgs = arguments[i].toString().split('');
			for(j = 0; j < splitArgs[j]; j++){
			 current += parseInt(splitArgs[j])
			}
			if(current > theBiggest){
				theBiggest = current;
				result = arguments[i];
				index = i;
			}
			current = 0;
		}
	}
	console.log(checkTheIndexes(minusIndexes, index, result))
}

/*check the indexMinus (arr[[minusElement, indexMinus]]) from the array with the index of the result,
and if they are equal return the arr[[element]] otherwise return result
 */
function checkTheIndexes(arr, index, result){
	//arr[[minusElement, index],[-2,2]]
	var i;
	var j;
	for(i = 0; i < arr.length; i++){
		for(j = 0; j < arr.length; j++){
			if(arr[i][1] === index){
				return arr[i][0]
			}
		}
	}
	return result;
}