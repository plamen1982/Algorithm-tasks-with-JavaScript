function progress_bar(container){

	var bar = document.createElement('div');
	var text = document.createElement('div');

	bar.style.width = '0px';
	bar.style.height = '100%';
	bar.style.background = '#eef';

	container.appendChild(bar);

	text.style.marginTop = '-26px';
	text.style.textAlign = 'center';
	text.style.color = '#111';
	text.style.textSize = '15px';

	text.appendChild(document.createTextNode('0%'))

	container.appendChild(text);

	this.set_percentage = function(percantage){
		bar.style.width = percantage + '%';

		text.removeChild(text.firstChild);
		text.appendChild(document.createTextNode(percantage + '%'))
	}

}