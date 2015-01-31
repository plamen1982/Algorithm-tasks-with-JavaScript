
	var isLike = true;

function likeUnlike(str){

	if(isLike){

		str.innerHTML = "Unlike";
		isLike = false;

	}

	else if(!isLike){
		str.innerHTML = "Like";
		isLike = true;
	}
}