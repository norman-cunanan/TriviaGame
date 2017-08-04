$(document).ready(function() {


	//score variables
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var unAnswered = 0;

	// all the right answers
	var allRightAnswers = ["Answer1", "Answer2", "Answer3", "Answer4"];

	//start of timer
	var countdown = 31;

	// timer
	var countingTimer = null;



	function timerCounts(){
		countingTimer = setInterval (decrement, 1000);
		console.log("Timer starts!")
	};
	
	function decrement(){
		countdown--;

		$(".timer").html("Timer: " + countdown);

		if (countdown === 0) {
			stopTimer();
			console.log("Timer is done!")
			showStatsPage();
		};

	};
	

	function stopTimer(){

		clearInterval(countingTimer);
	};

	//add score variables
	function showStatsPage(){
		$("#finishTitle").html("Time is up!");
		$("#correct").html("Correct Answers: " + correctAnswers);
		$("#incorrect").html("Incorrect Answers: " + wrongAnswers);
		$("#unanswered").html("Unanswered: " + unAnswered)

	}


$("#start-button").on("click", timerCounts);







});
