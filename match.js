var tileColor = '';
var time = 100;
var score = 0;
var tiles = 6;
var interval = '';
var start = false;

 function clickedTile(selected , color) {
 	if(start){
	 	if(tileColor == ''){
	 		tileColor = selected;
	 		document.getElementById(selected).firstChild.style.background = color; 
	 		return;
	 	} else {
	 		if(tileColor == selected.concat('1') || 
	 			tileColor == selected.substring(0,selected.length-1)){
	 			if(tiles > 1 ){			
		 			matchedout(selected,color);
		 			setTimeout(function(){
			 			tileColor = '';
			 			hideTile(selected);
			 			points();
		 			},250);
		 			tiles--;
	 			} else {
	 				wonGame(score);
	 			} 
	 			return;
	 		} else {
	 			document.getElementById(selected).firstChild.style.background = color;
	 			setTimeout(function(){
	 				grayout(tileColor,selected);
	 				tileColor ='';
	 			},250);
	 			return;
	 			}
	 		}
 		} else {
 			return;
 		}
 	}

function hideTile (tile) {
	if(tile.indexOf('1')=== -1){
	var tile1 = tile.concat('1');
	document.getElementById(tile).className = 'hide';
	document.getElementById(tile1).className = 'hide';	
	} else {
		var tileNoOne = tile.substring(0,tile.length-1);
		document.getElementById(tile).className = 'hide';
		document.getElementById(tileNoOne).className = 'hide';
	}
	
}

function grayout(tileColor,selected){
	document.getElementById(tileColor).firstChild.style.background = 'gray';
 	document.getElementById(selected).firstChild.style.background = 'gray';

}

function matchedout(selected,color){
 	document.getElementById(selected).firstChild.style.background = color;

}

function timer(s){
	time = 100;
	interval = setInterval(function(){
		document.getElementById('time').innerHTML = time--;
		},500);
}

function points(){
	score +=time;
	document.getElementById('score').innerHTML = score;
	clearInterval(interval);
	timer();
}

function wonGame(s){
	clearInterval(interval);
	document.getElementById('body').innerHTML = "WINNER! Your score was: ".concat(s);
	document.getElementById('body').style.fontSize = '100px';
	document.getElementById('body').style.borderLeftWidth = '500px';
}

function hideButton(){
	document.getElementById('startButton').className = 'hide';
	start = true;
}