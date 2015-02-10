window.onload = function() {

	var bar = new progress_bar(document.getElementById('progress_bar_wrap'));

	document.getElementById('set_25').onclick = function(){
		bar.set_percentage(25)
	};
	document.getElementById('set_50').onclick = function(){
		bar.set_percentage(50)
	};
	document.getElementById('set_75').onclick = function(){
		bar.set_percentage(75)
	}

	document.getElementById('from_0_to_100').onclick = function(){
		var	i = 0;
		var interval = window.setInterval(function(){
			if( i >= 100) {
			window.clearInterval(interval)
			}

			bar.set_percentage(i++);
		}, 50)
	}
};