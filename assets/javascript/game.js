 var qs = {
 	q1: ["This gentle alien race looks a little like cthulu but carries a glowing sphere which functions as a speaking device:"],
 	q1a: "The Ood",
 	q1no: ["Weeping Angels", "Adipose", "Cybermen"],
 	q1img: "https://media.giphy.com/media/WE5hRLWRWalwY/giphy.gif",
 	q2: "He just wants to go home. Can’t he just borrow your phone?",
 	q2a: "E.T.",
 	q2no: ["Alf", "Answer No", "Answer No Too"],
 	q2img: "https://media.giphy.com/media/gHcPh3ehbRGik/giphy.gif",
}
var timeClock = 30
var answers = []
var correctAnswers = 0
var wrongAnswers = 0
var myTimer
var currentQ = qs.q1;
var currentAns = qs.q1a;
var currentDecoy = qs.q1no;
var currentImg = qs.q1img;

// start button activation
$(document).ready(function startButton() {
	 $("#ongo").on("click", function() {
	 	// writes the clock to the page
	 	$("#timer").text("Seconds left: " + timeClock);
	 	qClock();
	 	
	 	// hides the button
	 	$("#ongo").addClass("hidden");

	 	// writes the question to the page 
	 	$("#question").text(currentQ);

		answerArray();
		renderAnswers();
	 })
})

function start() {
		// writes the question to the page 
		$("#timer").text("Seconds left: " + timeClock);
	 	qClock();
	 	$("#question").text(currentQ);
		answerArray();
		renderAnswers();
}

// creates array of answers
function answerArray() {
	// pushes all of the possible answers to the answers array
	answers.push(currentAns);
 	for (var i = 0; i < 3; i++) {
 		answers.push(currentDecoy[i]);
 	}

 	// sorts the new array of answers
 	answers.sort(function sort() { 
		return (Math.round(Math.random()) - 0.5);
	});
}

// renders ansers to the DOM
function renderAnswers() {
	// creates a p tag to display the answers on the page vertically and assigns hover class 
	for (var i = 0; i < answers.length; i++) {
		$("<p>" + answers[i] + "</p>" + "<hr>").addClass("hoverThing").attr("data-value", answers[i]).appendTo("#answers");
	}
}

// 30 second timer 
function qClock() {
	timeClock = 30;
	myTimer = setInterval(decrement, 1000)

	function decrement() {
		timeClock--;
		console.log(timeClock)
		$("#timer").text("Seconds left: " + timeClock);

      	if (timeClock === 0) {
	        stop();
	        console.log("Time Up!");
			wrongAnswers++;
			answers = [];
			removeQ();
			timesUp();
			// I think I'm going to need nested objects.
			currentQ = qs.q2;
			currentAns = qs.q2a;
			currentDecoy = qs.q2no;
			currentImg = qs.q2img;
			start();
      	}
    }
}

// stops and clears the timer
function stop() {
  clearInterval(myTimer);
  timeClock = 30;
}

// registers click and compares to right answers, increases correct/wrong answers, 
// clears the answers array
$(document).on("click", ".hoverThing", function() {
	var userAnswer = this
	console.log(this);

	if (($(this).attr("data-value")) === currentAns) {
		console.log("winner!");
		correctAnswers++;
		answers = [];
		stop();
		removeQ();
		resultYes();
		currentQ = qs.q2;
		currentAns = qs.q2a;
		currentDecoy = qs.q2no;
		currentImg = qs.q2img;	
	}

	else {
		console.log("loser");
		wrongAnswers++;
		answers = [];
		stop();
		removeQ();
		resultNo();
		currentQ = qs.q2;
		currentAns = qs.q2a;
		currentDecoy = qs.q2no;
		currentImg = qs.q2img;
	}
});

// removes current text 
function removeQ() {
	$("#question").empty();
	$("#answers").empty();
	$("#timer").empty();
}

// displays this text for 3 seconds if correct answer
function resultYes() {
	myTimer = setTimeout(yesDelete, 3000);

	$("#question").text("That's right!  It's " + currentAns + ".");
	$("<img src='" + currentImg + "'' />").appendTo("#img-result");
}

// displays this text for 3 seconds if wrong answer
function resultNo() {
	myTimer = setTimeout(yesDelete, 3000);

	$("#question").text("Nope!  It's " + currentAns + ".");
	$("<img src='" + currentImg + "'' />").appendTo("#img-result");
}

// displays this text for 3 seconds if time runs out
function timesUp() {
	myTimer = setTimeout(yesDelete, 3000);

	$("#question").text("Time's Up!  The correct answer is: " + currentAns + ".");
	$("<img src='" + currentImg + "'' />").appendTo("#img-result");
}
// deletes result information from the DOM
function yesDelete() {
	$("#question").empty();
	$("#img-result").empty();
	clearTimeout(myTimer);
	start();
}

// displays the tally of correct and wrong answers on the final screen 
function lastPage() {
	$("#questions").text("Correct answers: " + correctAnswers);
	$("#answers").text("Wrong answers: " + wrongAnswers);
}