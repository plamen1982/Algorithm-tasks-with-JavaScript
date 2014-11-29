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

