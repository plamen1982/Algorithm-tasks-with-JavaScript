function Solve(params) {
	var N = parseInt(params[0]);
	var answer = 0;
	 for(var i = 1; i <= N; i++ ){
		if(i === 1){
			answer++
		}
		if(parseInt(params[i]) > parseInt(params[i+1])){
				answer++
			}
		}
		

	return answer;
}
	// OK - Test length of ther arraylenghtconsole.log(params.length) console.log(N)
	// OK - Test for comparing numbers from the array if(params[1]===params[2]){ }
	//OK  - Test for sum from an array	console.log(params[1] + params[2])
	//OK - Test for print for loop
	//OK - Test for - minus values
