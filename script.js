var breakMinus = document.querySelector("#breakMinus");
var breakPlus = document.querySelector("#breakPlus");
var breakLengthDisplay = document.querySelector("#breakLength");
var sessionMinus = document.querySelector("#sessionMinus");
var sessionPlus = document.querySelector("#sessionPlus");
var sessionLengthDisplay = document.querySelector("#sessionLength");
var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");
var timerMinutesDisplay = document.querySelector("#timerMinutes");
var timerSecondsDisplay = document.querySelector("#timerSeconds");
var breakLength = 1;
var sessionLength = 2;
var timerSeconds = 60;
var state1 = false;
var timer;

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
		timerMinutesDisplay.textContent = sessionLength;
	}
});

sessionPlus.addEventListener("click", function(){
	sessionLength++;
	sessionLengthDisplay.textContent = sessionLength;
	timerMinutesDisplay.textContent = sessionLength;
})


//timer
startButton.addEventListener("click", function(){
	var sessionMinutes = sessionLength;
	var breakMinutes = breakLength;

	//sessions countdown
		
		function showSessionTime(){
			if(!state1){
				timerMinutesDisplay.textContent = --sessionMinutes;
				console.log("***sessionMinutes: " + sessionMinutes + "***");
				state1 = true
			}

			if(timerSeconds >= 0){
				if(timerSeconds < 10){
					timerSecondsDisplay.textContent = "0" + timerSeconds;
				} else{
					timerSecondsDisplay.textContent = timerSeconds;
				}
			}
			console.log(timerSeconds);
			timerSeconds--;
			
			if(timerSeconds === -1 && sessionMinutes >= 0 ){
					if(sessionMinutes === 0){
						timerMinutesDisplay.textContent = "00";
						--sessionMinutes;
					}
					else if(sessionMinutes <= 10){
						timerMinutesDisplay.textContent = "0" + (--sessionMinutes);
					} else {
						timerMinutesDisplay.textContent = --sessionMinutes;
					}
					timerSeconds = 60;	
					console.log("***sessionMinutes: " + sessionMinutes + "***");
			}

			timer = setTimeout(showSessionTime, 300);
			if(sessionMinutes === -1){
				clearTimeout(timer);
				sessionMinutes = sessionLength;
				state1 = false;
				console.log("sessionLength: " + sessionLength +
							" state1: " + state1 +
							" timerSeconds: " + timerSeconds);
				// breakMinutes = breakLength;
				 showBreakTime();
			}
			
		}
		
// break countdown
		
		function showBreakTime(){
			if(!state1){
				timerMinutesDisplay.textContent = --breakMinutes;
				console.log("***breakMinutes: " + breakMinutes + "***");
				state1 = true
			}

			if(timerSeconds >= 0){
				if(timerSeconds < 10){
					timerSecondsDisplay.textContent = "0" + timerSeconds;
				} else{
					timerSecondsDisplay.textContent = timerSeconds;
				}
			}
		
		console.log(timerSeconds);
		timerSeconds--;	

		if(timerSeconds === -1 && breakMinutes >= 0 ){
					if(breakMinutes === 0){
						timerMinutesDisplay.textContent = "00";
						--breakMinutes;
					}
					else if(breakMinutes <= 10){
						timerMinutesDisplay.textContent = "0" + (--breakMinutes);
					} else {
						timerMinutesDisplay.textContent = --breakMinutes;
					}
					timerSeconds = 60;	
					console.log("***breakMinutes: " + breakMinutes + "***");
			}

			timer = setTimeout(showBreakTime, 300);
			if(breakMinutes === -1){
				clearTimeout(timer);
				breakMinutes = breakLength;
				state1 = false;
				console.log("breakLength: " + breakLength +
							" state1: " + state1 +
							" timerSeconds: " + timerSeconds);
				showSessionTime();
			}
		}

		showSessionTime();

		pauseButton.addEventListener("click", function(){
			window.clearTimeout(timer);
		});

		function reset(){
	
	
	breakLength = 5;
	sessionLength = 25;
	breakLengthDisplay.textContent = breakLength;
	sessionLengthDisplay.textContent = sessionLength;
}
			
});

//reset


