// input ['6 7 3', '0 0', '2 2', '-2 2', '3 -1']
		// r c j    x1 y1  x2 y2   x3 y3  x4 y4
// output escaped 89

function Solve(args){
	var rcjArr = args[0].split(' '),
		//r-rows, c-cols, j-number of jumps
		r = parseInt(rcjArr[0]), 
		c = parseInt(rcjArr[1]),
		j = parseInt(rcjArr[2]),
		xyArrStr = args[1].split(' '),
		x = parseInt(xyArrStr[0]),
		y = parseInt(xyArrStr[1]),
		xyRestArrStr = args.slice(2),
		count = 0,
		k = 0,
		sum = 0,
		xyCoord = [],
		xyFirstAndSecond = [],
		used = {},
		i;
		for(i = 0; i < j; i++){
			xyFirstAndSecond = xyRestArrStr[i].split(' ');
			xyCoord[i] = {
				x: parseInt(xyFirstAndSecond[0]),
				y: parseInt(xyFirstAndSecond[1])
			}
		}

		function inRange(currentCoord, boundCoord){
			return currentCoord >= 0 && currentCoord < boundCoord;
		}
		
		
		while(true){
			if(!inRange(x, r) || !inRange(y, c)){
				return 'escaped ' + sum;
			}
			if(used[x*c + y]){
				return 'catched ' + count;
			}
			used[x*c + y] = true;
			sum += (x*c + y + 1); 
			count++;			  
			x += xyCoord[k].x;		
			y += xyCoord[k].y;		
			k++;					
			k %= j;				
		}
}
