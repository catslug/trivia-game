// NEED TO TELL IT WHAT TO DO WHEN YOU GET TO THE LAST QUESTION.
var qs = {
  hereMyQuestions: [{
    question: "This gentle alien race looks a little like cthulu but carries a glowing sphere which functions as a speaking device:",
    yesAnswer: "The Ood",
    noAnswer: ["Weeping Angels", "Adipose", "Cybermen"],
    ansImg: "https://media.giphy.com/media/WE5hRLWRWalwY/giphy.gif",
  }, { 
    question: "He just wants to go home. Can’t he just borrow your phone?",
    yesAnswer: "E.T.",
    noAnswer: ["Alf", "Answer No", "Answer No Too"],
    ansImg: "https://media.giphy.com/media/gHcPh3ehbRGik/giphy.gif",
  }, {
    question: "She’s no longer the heir to the throne. In search of herself, she runs off to live among wolves in the woods of Ooo, was subsequently banished, and proceeded to terrorize a local village in order to eat their crops. This princess is:",
    yesAnswer: "Lumpy Space Princess",
    noAnswer: ["Flame Princess", "Princess Bubblegum", "Princess Leia"],
    ansImg: "https://media.giphy.com/media/3eT5kJmvLl8TC/giphy.gif",
  }, {
  	question: "A parody mirror character to Star Wars’ giant-eyed, worm-like villain, this character is known as:",
  	yesAnser: "Pizza the Hut",
  	noAnswer: ["Jabberwocky", "Bubble Tea Fet", "blah"]
  	ansImg: "https://media.giphy.com/media/e9naBh3ziasN2/giphy.gif"
  }, {
  	question: "The universe’s twisted pest control, this vicious species wears a tough mechanical exterior over their delicate inner bodies and approach all enemies while chanting “exterminate”.",
  	yesAnser: "Daleks",
  	noAnswer: ["Sontaran", "Slitheen", "Time Lords"]
  	ansImg: 
  }, {
  	question: "Blah Blah",
  	yesAnser: "Blah",
  	noAnswer: []
  	ansImg: 
  }, {
  	question: "Blah Blah",
  	yesAnser: "Blah",
  	noAnswer: []
  	ansImg: 
  }, {
  	question: "Blah Blah",
  	yesAnser: "Blah",
  	noAnswer: []
  	ansImg: 
  }, {
  	question: "Blah Blah",
  	yesAnser: "Blah",
  	noAnswer: []
  	ansImg: 
  }, {
  	question: "Blah Blah",
  	yesAnser: "Blah",
  	noAnswer: []
  	ansImg: 
  }, {
  	question: "Blah Blah",
  	yesAnser: "Blah",
  	noAnswer: []
  	ansImg: 
  }, {
  	question: "Blah Blah",
  	yesAnser: "Blah",
  	noAnswer: []
  	ansImg: 
  }, {
  	question: "Blah Blah",
  	yesAnser: "Blah",
  	noAnswer: []
  	ansImg: 
  }, {
  	question: "Blah Blah",
  	yesAnser: "Blah",
  	noAnswer: []
  	ansImg: 
  }, {
  	question: "Blah Blah",
  	yesAnser: "Blah",
  	noAnswer: []
  	ansImg: 
  }]
}
var timeClock = 30
var answers = []
var correctAnswers = 0
var wrongAnswers = 0
var myTimer
var currentQ = 0

// start button activation
$(document).ready(function startButton() {
	 $("#ongo").on("click", function() {
	 	// writes the clock to the page
	 	$("#timer").text("Seconds left: " + timeClock);
	 	qClock();
	 	
	 	// hides the button
	 	$("#ongo").addClass("hidden");

	 	// writes the question to the page 
	 	$("#question").text(qs.hereMyQuestions[currentQ].question);

		answerArray();
		renderAnswers();
	 })
})

function start() {
		// writes the question to the page 
		$("#timer").text("Seconds left: " + timeClock);
	 	qClock();
	 	$("#question").text(qs.hereMyQuestions[currentQ].question);
		answerArray();
		renderAnswers();
}

// creates array of answers
function answerArray() {
	// pushes all of the possible answers to the answers array
	answers.push(qs.hereMyQuestions[currentQ].yesAnswer);
 	for (var i = 0; i < 3; i++) {
 		answers.push(qs.hereMyQuestions[currentQ].noAnswer[i]);
 	}

 	// sorts the new array of answers
 	answers.sort(function sort() { 
		return (Math.round(Math.random()) - 0.5);
	});
}

// renders answers to the DOM
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
			currentQ++;
			start();
      	}
    }
}

// stops and clears the timer, resets value
function stop() {
  clearInterval(myTimer);
  timeClock = 30;
}

// registers click and compares to right answers, increases correct/wrong answers, 
// clears the answers array
$(document).on("click", ".hoverThing", function() {
	var userAnswer = this
	console.log(this);

	if (($(this).attr("data-value")) === qs.hereMyQuestions[currentQ].yesAnswer) {
		console.log("winner!");
		correctAnswers++;
		answers = [];
		stop();
		removeQ();
		resultYes();
		currentQ++;	
	}

	else {
		console.log("loser");
		wrongAnswers++;
		answers = [];
		stop();
		removeQ();
		resultNo();
		currentQ++; 
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

	$("#question").text("That's right!  It's " + qs.hereMyQuestions[currentQ].yesAnswer + ".");
	$("<img src='" + qs.hereMyQuestions[currentQ].ansImg + "'' />").appendTo("#img-result");
}

// displays this text for 3 seconds if wrong answer
function resultNo() {
	myTimer = setTimeout(yesDelete, 3000);

	$("#question").text("Nope!  It's " + qs.hereMyQuestions[currentQ].yesAnswer + ".");
	$("<img src='" + qs.hereMyQuestions[currentQ].ansImg + "'' />").appendTo("#img-result");
}

// displays this text for 3 seconds if time runs out
function timesUp() {
	myTimer = setTimeout(yesDelete, 3000);

	$("#question").text("Time's Up!  The correct answer is: " + qs.hereMyQuestions[currentQ].yesAnswer + ".");
	$("<img src='" + qs.hereMyQuestions[currentQ].ansImg + "'' />").appendTo("#img-result");
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