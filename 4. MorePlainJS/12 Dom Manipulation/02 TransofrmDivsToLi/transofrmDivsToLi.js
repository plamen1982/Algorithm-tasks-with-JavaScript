

function transformDivsToLi(){
 var li;
 var strArray =  [];
 var divs = document.getElementsByTagName('div');
 var result  = document.getElementById('result');

    for (var i = 0; i < divs.length; i ++){
    	if(divs[i].innerHTML){
      		 strArray.push( divs[i].innerHTML);
  		 }
    }

    for(var j = 0; j < strArray.length; j++){
        li = document.createElement('li');
        li.innerHTML = strArray[j];
        result.appendChild(li);
    }
}