var box = document.getElementById("box");
		 var slider = document.getElementById("slider");
		 var left = document.getElementById("left");
		 var right = document.getElementById("right");
		 var index = 1;
		 var nav = document.getElementById("nav").children;
		 var isMoving = false;
		 var warn = document.getElementById("warn");
		 setInterval(function(){
		 	var now = parseInt(getStyle(warn,'left'));
		 	warn.style.left = now - 1 + "px";
		 	if(warn.style.left === '-200px'){
		 		warn.style.left = '1100px';
		 	}

		 }, 20)

		 function getStyle(obj,attr){
		 	if(obj.currentStyle){
		 		return obj.currentStyle[attr];
		 	}else{
		 		return getComputedStyle(obj,null)[attr];
		 	}
		 }

		 function lunbo(){
		 	if(!isMoving){
		 		isMoving = true;
			 	index++;
			 	navChange();
				animate(slider,{left:-1200*index}, function(){
					if(index === 6){
						slider.style.left = "-1200px";
	                    index = 1;
					}
					isMoving = false;
				})
			}
		}

		var timer = setInterval(lunbo, 3000);

		box.onmouseover = function(){
			animate(left,{opacity:50});
			animate(right, {opacity:50});
			clearInterval(timer);
		}

		box.onmouseout = function(){
			animate(left, {opacity:50});
			animate(right, {opacity:50});
			timer = setInterval(lunbo,3000);
		}

		right.onclick = lunbo;
		left.onclick = function lunbo1(){
			if(!isMoving){
				isMoving = true;
				index--;
				navChange();
				animate(slider,{left:-1200*index}, function(){
					if(index === 0){
						slider.style.left = "-6000px";
	                    index = 5;
					}
					isMoving = false;
				})
			}
		 }

		 for(var i = 0 ; i < nav.length ; i++){
		 	nav[i].idx = i;
		 	nav[i].onclick = function(){
		 		index = this.idx + 1;
		 		navChange();
		 		animate(slider,{left:-1200 * index})
		 	}
		 }
		 function navChange(){
		 	for(var i = 0 ; i < nav.length ; i++){
		 		nav[i].className = "";
		 	}
			 if(index === 6){
			 	nav[0].className = "active";
			 }
			 else if(index === 0){
			 	nav[4].className = "active";
			 }
			 else{
			 	nav[index - 1].className = "active";
			 }	
		 }