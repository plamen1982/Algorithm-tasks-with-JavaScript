function countDivs(str){
	var index = 0;
	var count = 0;
	var result = document.getElementById('result')
	while(index > -1){
		index = str.indexOf('<div')
		str = str.slice(index + 5)
		if(index > -1){
			count ++;
		}
		
	}
	result.innerHTML = 'The numbers of the divs are: ' + count;
}