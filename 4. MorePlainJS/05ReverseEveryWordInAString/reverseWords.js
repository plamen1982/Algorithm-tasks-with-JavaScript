function reverseWordsInString(str){
	var i;
	var j;
	var reverseWord = '';
	var splitWord = [];
	var results = [];
	var arr = str.split(' ');
	for(i = 0; i < arr.length; i++){
		splitWord = arr[i].split('');
		reverseWord = splitWord.reverse();
		results.push(reverseWord.join(''));
		reverseWord = [];
		splitWord = '';
	}
	console.log(results.join(' '))
}