function solve(arrayOfStrings) {

	var i;
	var j;
	var k;
	var result;
	var typeBlade = '';
	var arrayOfInt = [];

	result = '<table border="1">' + "\n" +
	'<thead>'+'\n'+'<tr><th colspan="3">Blades</th></tr>' + '\n' +
	'<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>' + '\n' +
	'</thead>' + '\n' +
	'<tbody>' + '\n';
	for (i = 0; i < arrayOfStrings.length; i++) {
		arrayOfInt[i] = parseInt(arrayOfStrings[i]);
	}

	for (j = 0; j < arrayOfInt.length; j++) {
		if (arrayOfInt[j] > 10) {
			if (arrayOfInt[j] > 40) {
				typeBlade = 'sword';
				result += '<tr><td>' + arrayOfInt[j] + '</td><td>' + typeBlade + '</td><td>' + nameOfTheBlade(arrayOfInt[j]) + '</td></tr>' + '\n';

			}
			else {
				typeBlade = 'dagger';
				result += '<tr><td>' + arrayOfInt[j] + '</td><td>' + typeBlade + '</td><td>' + nameOfTheBlade(arrayOfInt[j]) + '</td></tr>' + '\n';

			}
		}
	}
	result +=  '</tbody>' +'\n'+
	'</table>';
	console.log(result);
	function nameOfTheBlade(integer) {
		switch (integer % 5) {
			case 0:
				return '*rap-poker';
			case 1:
				return 'blade';
			case 2:
				return 'quite a blade';
			case 3:
				return 'pants-scraper';
			case 4:
				return 'frog-butcher';
		}
	}
}
solve(
	["17.8",
		"19.4",
		"13",
		"55.8",
		"999.96541651",
		"3"]);