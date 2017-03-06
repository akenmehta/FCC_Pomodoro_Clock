var breakMinus = document.querySelector("#breakMinus");
var breakPlus = document.querySelector("#breakPlus");
var breakLengthDisplay = document.querySelector("#breakLength");

var sessionMinus = document.querySelector("#sessionMinus");
var sessionPlus = document.querySelector("#sessionPlus");
var sessionLengthDisplay = document.querySelector("#sessionLength");

var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");
var resumeButton = document.querySelector("#resume");
var timer = document.querySelector("#timer");
var breakLength = 5;
var sessionLength =25;
var id;
var displayTimer = "00:00";
var state = true;

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

//hide Pause and Resume buttons
pauseButton.style.display = "none";
resumeButton.style.display = "none";
//sessions countdown
function startTimer(min, sec){
	startButton.style.display = "none";
	pauseButton.style.display = "";
	//console.log("min: " + min + " " + "sec: " +  sec);
	timer.textContent = (sec >= 10) ? (min + ":" + sec) : (min + ":" + "0" + sec);
	if(sec == 0){
		if(min == 0){
			if(state){
				state = false;
				timer.classList.remove("greenTimer");
				timer.classList.add("redTimer");
				//console.log("Break Timer");
				return startTimer(breakLength, 0);
			} else {
				//console.log("Session Timer");
				state = true;
				timer.classList.remove("redTimer");
				timer.classList.add("greenTimer");
				return startTimer(sessionLength, 0);
			}		
		} else if(min != 0){
			sec = 60;
			min--;
		}
	}

	sec--;
	id = setTimeout(function(){
		startTimer(min, sec);
	}, 1000);
}

function pauseTimer(){
	pauseButton.style.display = "none";
	resumeButton.style.display = "";
	displayTimer = timer.textContent;
	//console.log("Paused");
	clearTimeout(id);
}

function resumeTimer(){
	resumeButton.style.display = "none";
	pauseButton.style.display = "";
	var t = displayTimer.split(":");
	//console.log("resume clicked");
	startTimer(parseInt(t[0], 10), parseInt(t[1], 10));
}

function reset(){
	pauseButton.style.display = "none";
	resumeButton.style.display = "none";
	startButton.style.display = "";
	timer.classList.remove("redTimer");
	timer.classList.add("greenTimer");
	timer.textContent = "25:00"
	breakLength = 5;
	breakLengthDisplay.textContent = breakLength;
	sessionLength = 25;
	sessionLengthDisplay.textContent = sessionLength;
	state = true;
	clearTimeout(id);
}

//start timer
startButton.addEventListener("click", function(){
	startTimer(sessionLength, 0);
});

//pause button
pauseButton.addEventListener("click", function(){
	pauseTimer();
});

//resume button
resumeButton.addEventListener("click", function(){
	resumeTimer();
});

//reset button
resetButton.addEventListener("click", function(){
	reset();
});
