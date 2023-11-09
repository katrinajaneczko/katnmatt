
var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;
var ok = 0; // Add this line to define 'ok' variable

function timer(){
	var start = new Date(2022, 11, 14, 0, 0);
	var t = new Date() - start;
	var d = Math.floor(t / 1000 / 60 / 60 / 24);
	document.getElementById("d").innerHTML = d;
}

function fadein(){
	if(val < 1){
		val += 0.025;
		dv.style.opacity = val;
	}
	else{
		clearInterval(fadeinInterval);
		if(ok == 2){
			ok += 1;
		}
	}
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function(){
	if(ok == 2){
		clearInterval(fadeInterval);
		fadeinInterval = setInterval(fadein, 50);
	}
}, 50)
