function caseOne(arr){
	var i;
	var result;
	var resultStr = '';
	var remainder1 = 0;
	var remainder2 = 0;
	var currentSum = 0;
	var arrResult = [];
	var num1 = parseInt(arr[0]);
	var num2 = parseInt(arr[1]);
	while(num1 > 1){
		//reset them later
		remainder1 = num1 % 10;
		remainder2 = num2 % 10;
		num1 = Math.floor(num1 / 10);
		num2 = Math.floor(num2 / 10);
		currentSum = remainder1 + remainder2;
		if( currentSum >= 10){
			resultStr += currentSum % 10;
			num1 ++;
		}
		else {
			resultStr += currentSum;
		}
		currentSum = 0;
		remainder1 = 0;
		remainder2 = 0;

	}
	result = resultStr.split('').reverse().join('');
	console.log(result);

}
function caseTwo(arr){
	var i;
	var result;
	var resultStr = '';
	var remainder1 = 0;
	var remainder2 = 0;
	var currentSum = 0;
	var arrResult = [];
	var num1 = parseInt(arr[0]);
	var num2 = parseInt(arr[1]);
	while(num1 > 1){
		//reset them later
		remainder1 = num1 % 10;
		remainder2 = num2 % 10;
		num1 = Math.floor(num1 / 10);
		num2 = Math.floor(num2 / 10);
		currentSum = remainder1 + remainder2;
		if( currentSum >= 10){
			resultStr += currentSum % 10;
			num1 ++;
		}
		else if( arr[0][0] !== 0){
			resultStr += currentSum;
		}
		else {
			resultStr += currentSum;
		}
		currentSum = 0;
		remainder1 = 0;
		remainder2 = 0;

	}
	result = resultStr.split('').reverse().join('');
	console.log(result);

}
function caseThree(arr){
	var i;
	var result;
	var resultStr = '';
	var remainder1 = 0;
	var remainder2 = 0;
	var currentSum = 0;
	var arrResult = [];
	var num1 = parseInt(arr[0]);
	var num2 = parseInt(arr[1]);
	while(num2 > 1){
		//reset them later
		remainder1 = num1 % 10;
		remainder2 = num2 % 10;
		num1 = Math.floor(num1 / 10);
		num2 = Math.floor(num2 / 10);
		currentSum = remainder1 + remainder2;
		if( currentSum >= 10){
			resultStr += currentSum % 10;
			num2 ++;
		}
		else if( arr[1][0] !== 0){
			resultStr += currentSum;
		}
		else {
			resultStr += currentSum;
		}
		currentSum = 0;
		remainder1 = 0;
		remainder2 = 0;

	}
	result = resultStr.split('').reverse().join('');
	console.log(result);

}
function findTheCase(str1, str2){
	if(str1.length === str2.length){
		return 1;
	}
	if(str1.length > str2.length){
		return 2;
	}
	if(str1.length < str2.length){
		return 3;
	}
}

function sumTwoHugeNumbers(arr){
	switch(findTheCase(arr[0],arr[1])){
		case 1 : caseOne(arr);
			break;
		case 2 : caseTwo(arr);
			break;
		case 3: caseThree(arr);
			break;
	}
}