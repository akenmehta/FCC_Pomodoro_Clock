var breakMinus = document.querySelector("#breakMinus");
var breakPlus = document.querySelector("#breakPlus");
var breakLengthDisplay = document.querySelector("#breakLength");

var sessionMinus = document.querySelector("#sessionMinus");
var sessionPlus = document.querySelector("#sessionPlus");
var sessionLengthDisplay = document.querySelector("#sessionLength");

var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");

var timer = document.querySelector("#timer");
var breakLength = 5;
var sessionLength = 25;
var id;
var displayTimer = "00:00"

//break length
breakMinus.addEventListener("click", function(){
	if(breakLength > 1){
		breakLength--;
		breakLengthDisplay.textContent = breakLength;
	}
});

breakPlus.addEventListener("click", function(){
	breakLength++;
	breakLengthDisplay.textContent = breakLength;
});

//session length
sessionMinus.addEventListener("click", function(){
	if(sessionLength > 1){
		sessionLength--;
		sessionLengthDisplay.textContent = sessionLength;
		timer.textContent = sessionLength + ":00";
	}
});

sessionPlus.addEventListener("click", function(){
	sessionLength++;
	sessionLengthDisplay.textContent = sessionLength;
	timer.textContent = sessionLength + ":00";
})

//sessions countdown
function startSessionTimer(min, sec){
	//console.log("min: " + min + " " + "sec: " +  sec);
	timer.textContent = (sec >= 10) ? (min + ":" + sec) : (min + ":" + "0" + sec);
	if(sec == 0){
		if(min == 0){
			return startBreakTimer(breakLength, 0);
		} else if(min != 0){
			sec = 60;
			min--;
		}
	}

	sec--;
	id = setTimeout(function(){
		startSessionTimer(min, sec);
	}, 500);
}
//break countdown
function startBreakTimer(min, sec){
	//console.log("++++++++++++");
	//console.log("min: " + min + " " + "sec: " +  sec);
	timer.textContent = (sec >= 10) ? (min + ":" + sec) : (min + ":" + "0" + sec);
	if(sec == 0){
		if(min == 0){
			return startSessionTimer(sessionLength, 0);
		} else if(min != 0){
			sec = 60;
			min--;
		}
	}

	sec--;
	id = setTimeout(function(){
		startBreakTimer(min, sec);
	}, 500);
}
//timer
startButton.addEventListener("click", function(){
	startSessionTimer(sessionLength, 0);
});
//pause button
resetButton.addEventListener("click", function(){
		clearTimeout(id);
		timer.textContent = "25:00"
});

//reset

function reset(){
	
}
