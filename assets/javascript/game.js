// NEED TO TELL IT WHAT TO DO WHEN YOU GET TO THE LAST QUESTION.
 
var qs = {
  hereMyQuestions: [{
    question: "This gentle alien race looks a little like cthulu but carries a glowing sphere which functions as a speaking device:",
    yesAnswer: "The Ood",
    noAnswer: ["Weeping Angels", "Adipose", "Cybermen"],
    imgAnswer: "https://media.giphy.com/media/WE5hRLWRWalwY/giphy.gif",
  }, { 
    question: "He just wants to go home. Can’t he just borrow your phone?",
    yesAnswer: "E.T.",
    noAnswer: ["Alf", "Answer No", "Answer No Too"],
    imgAnswer: "https://media.giphy.com/media/gHcPh3ehbRGik/giphy.gif",
  }, {
    question: "She’s no longer the heir to the throne. In search of herself, she runs off to live among wolves in the woods of Ooo, was subsequently banished, and proceeded to terrorize a local village in order to eat their crops. This princess is:",
    yesAnswer: "Lumpy Space Princess",
    noAnswer: ["Flame Princess", "Princess Bubblegum", "Princess Leia"],
    imgAnswer: "https://media.giphy.com/media/3eT5kJmvLl8TC/giphy.gif",
  }, {
  	question: "The universe’s twisted pest control, this vicious species wears a tough mechanical exterior over their delicate inner bodies and approach all enemies while chanting “exterminate”.",
  	yesAnswer: "Daleks",
  	noAnswer: ["Sontaran", "Slitheen", "Time Lords"],
  	imgAnswer: "https://media2.giphy.com/media/MAZ7tPKwCnrsA/giphy.gif",
  }, {
  	question: "Most notably represented by a much beloved character who is known for wishing fellow travelers to “live long and prosper”, this hyper-logical alien race is known as:",
  	yesAnswer: "Vulcans",
  	noAnswer: ["Klingon", "Human", "Blah"],
  	imgAnswer: "https://media2.giphy.com/media/n8SkNR77udWlG/giphy.gif",
  }, {
  	question: "A parody mirror character to Star Wars’ giant-eyed, worm-like villain, this character is known as:",
  	yesAnswer: "Pizza the Hut",
  	noAnswer: ["Jabberwocky", "Bubble Tea Fet", "blah"],
    imgAnswer: "https://media2.giphy.com/media/e9naBh3ziasN2/giphy.gif",
  }, {
  	question: "This alien race calls its origin planet “Homeworld” and has a unique ability to fuse and un-fuse with other members of its race, thus creating entirely new and more powerful entities. Some members of this race were born in areas that are known as “Kindergartens”. ",
  	yesAnswer: "Crystal Gems",
  	noAnswer: ["Corruptions", "Cyborgs", "Geodeans"],
    imgAnswer: "http://i.imgur.com/7iNzUEY.gif",
  }, {
  	question: "This alien race exiled its criminals to a dimensional plane known as the Phantom Zone. They're known as:",
  	yesAnswer: "Kryptonians",
  	noAnswer: ["Kroloteans", "Obsidian Folk", "Qwardians"],
    imgAnswer: "https://i.pinimg.com/originals/9a/e2/da/9ae2da473215e472618074c3194c358b.gif",
  }, {
  	question: "Not exactly verbal, but Han gets him.",
  	yesAnswer: "Chewbacca",
  	noAnswer: ["R2D2", "BB8", "C3PO"],
    imgAnswer: "https://i.pinimg.com/originals/9a/e2/da/9ae2da473215e472618074c3194c358b.gif",
  }, {
  	question: "",
  	yesAnswer: "",
  	noAnswer: ["Blah", "blah 2", "blah 3"],
    imgAnswer: "https://i.pinimg.com/originals/9a/e2/da/9ae2da473215e472618074c3194c358b.gif",
  }]
}
var timeClock = 15
var answers = []
var correctAnswers = 0
var wrongAnswers = 0
var myTimer
var currentQ = 0

// start button activation
$(document).ready(function startButton() {
	 $("#ongo").on("click", function() {
	 	
	 	// hides the button
	 	$("#ongo").addClass("hidden");

	 	start();
	 })
})

function start() {
		// writes the question to the page 
		$("#timer").text("Seconds left: " + timeClock);
	 	qClock();
	 	$("#question").text(qs.hereMyQuestions[currentQ].question);
		answerArray();
		renderAnswers();
		console.log("4, start function");
}

// creates array of answers
function answerArray() {
	// pushes all of the possible answers to the answers array
	answers.push(qs.hereMyQuestions[currentQ].yesAnswer);
 	for (var i = 0; i < 3; i++) {
 		answers.push(qs.hereMyQuestions[currentQ].noAnswer[i]);
 		console.log(answers);
 	}
 	console.log(answers);
 	console.log(currentQ);
 	
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
	timeClock = 15;
	myTimer = setInterval(decrement, 1000)

	function decrement() {
      	if (timeClock > 0) {
			timeClock--;
			console.log(timeClock)
			$("#timer").text("Seconds left: " + timeClock);
		} 

		else {
	        removeQ();
	        answers = [];
	        stop();
	        console.log("Line 26 Time Up!", timeClock);
			console.log(answers);
			timesUp();
			currentQ++;
      	}
    }
}

// stops and clears the timer, resets value
function stop() {
  	clearInterval(myTimer);
  	timeClock = 15;
  	console.log("1, stop function")
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
	console.log("2, removeQ")
}

// displays this text for 3 seconds if correct answer
function resultYes() {
	myTimer = setTimeout(yesDelete, 3000);

	$("#question").text("That's right!  It's " + qs.hereMyQuestions[currentQ].yesAnswer + ".");
	$("<img src='" + qs.hereMyQuestions[currentQ].imgAnswer + "' />").appendTo("#img-result");
}

// displays this text for 3 seconds if wrong answer
function resultNo() {
	myTimer = setTimeout(yesDelete, 3000);

	$("#question").text("Nope!  It's " + qs.hereMyQuestions[currentQ].yesAnswer + ".");
	$("<img src='" + qs.hereMyQuestions[currentQ].imgAnswer + "' />").appendTo("#img-result");
}

// displays this text for 3 seconds if time runs out
function timesUp() {
	myTimer = setTimeout(yesDelete, 3000);

	$("#question").text("Time's Up!  The correct answer is: " + qs.hereMyQuestions[currentQ].yesAnswer + ".");
	$("<img src='" + qs.hereMyQuestions[currentQ].imgAnswer + "' />").appendTo("#img-result");
	console.log("3, time's up function");
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