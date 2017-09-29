var qs = {
  hereMyQuestions: [{
    question: "This gentle alien race looks a little like cthulu but carries a glowing sphere which functions as a speaking device:",
    yesAnswer: "The Ood",
    noAnswer: ["Weeping Angels", "Adipose", "Cybermen"],
    imgAnswer: "https://media.giphy.com/media/WE5hRLWRWalwY/giphy.gif",
  }, { 
    question: "He just wants to go home. Can’t he just borrow your phone?",
    yesAnswer: "E.T.",
    noAnswer: ["Alf", "Superman", "The Thing"],
    imgAnswer: "https://media.giphy.com/media/gHcPh3ehbRGik/giphy.gif",
  }, {
    question: "She’s no longer the heir to the throne. In search of herself, she runs off to live among wolves in the woods of Ooo, was subsequently banished, and proceeded to terrorize a local village in order to eat their crops. This princess is:",
    yesAnswer: "Lumpy Space Princess",
    noAnswer: ["Flame Princess", "Princess Bubblegum", "Princess Leia"],
    imgAnswer: "https://media.giphy.com/media/3eT5kJmvLl8TC/giphy.gif",
  }, {
    question: "Which of the following first appeared on screen?",
    yesAnswer: "Marvin the Martian",
    noAnswer: ["Doctor Who", "Star Trek", "Star Wars"],
    imgAnswer: "https://media.giphy.com/media/5o43zr2pwbcyc/giphy.gif",
  }, {
  	question: "The universe’s twisted pest control, this vicious species wears a tough mechanical exterior over their delicate inner bodies and approach all enemies while chanting “exterminate”.",
  	yesAnswer: "Daleks",
  	noAnswer: ["Sontaran", "Slitheen", "Time Lords"],
  	imgAnswer: "https://media.giphy.com/media/Ho6UqzAKxYX8Q/giphy.gif",
  }, {
  	question: "Most notably represented by a much beloved character who is known for wishing fellow travelers to “live long and prosper”, this hyper-logical alien race is known as:",
  	yesAnswer: "Vulcans",
  	noAnswer: ["Klingon", "Humans", "Romulans"],
  	imgAnswer: "https://media2.giphy.com/media/n8SkNR77udWlG/giphy.gif",
  }, {
  	question: "A parody mirror character to Star Wars’ giant-eyed, worm-like villain, this character is known as:",
  	yesAnswer: "Pizza the Hut",
  	noAnswer: ["Jabberwocky", "Bubble Tea Fet", "Habba the Jutt"],
    imgAnswer: "https://media2.giphy.com/media/e9naBh3ziasN2/giphy.gif",
  }, {
  	question: "This alien race calls its origin planet “Homeworld” and has a unique ability to fuse and un-fuse with other members of its race. Some members of this race were born in areas that are known as “Kindergartens”. ",
  	yesAnswer: "Crystal Gems",
  	noAnswer: ["Corruptions", "Cyborgs", "Geodeans"],
    imgAnswer: "https://vignette3.wikia.nocookie.net/steven-universe/images/7/73/Log_Date_Animation_Steven_hug_from_behind_Peridot.gif/revision/latest?cb=20160114045348",
  }, {
  	question: "This alien race exiled its criminals to a dimensional plane known as the Phantom Zone. They're known as:",
  	yesAnswer: "Kryptonians",
  	noAnswer: ["Kroloteans", "Obsidian Folk", "Qwardians"],
    imgAnswer: "https://i.pinimg.com/originals/9a/e2/da/9ae2da473215e472618074c3194c358b.gif",
  }, {
  	question: "Fiercely loyal companion. Probably wanted by authorities on a dozen planets. May or may not know a thing or two about smuggling. Not exactly verbal, but an ace with a gun. ",
  	yesAnswer: "Chewbacca",
  	noAnswer: ["BB8", "Ewok", "Wookie"],
    imgAnswer: "https://media.giphy.com/media/lqrJPaWIsjTZS/giphy.gif",
  }, {
  	question: "Which of the following space travelers is not characterized by green-tinged skin?",
  	yesAnswer: "Green Lantern",
  	noAnswer: ["Gamora", "Raxacoricofallapatorian", "Hulk"],
    imgAnswer: "http://cdn1.clevver.com/wp-content/uploads/2013/10/superhero-movie-gifs-green-lantern-independentmasterlist..gif",
  }, {
  	question: "Which spaceship's crew was comprised entirely of humans?",
  	yesAnswer: "Serenity",
  	noAnswer: ["Starship Enterprise", "Millenium Falcon", "Milano"],
    imgAnswer: "https://media.tenor.com/images/302e7639700f41679ee8745333d6ca8d/tenor.gif",
  }, {
  	question: "What does Martian Manhunter fear most?",
  	yesAnswer: "Fire",
  	noAnswer: ["Dust Bunnies", "Heights", "Purple Vegetables"],
  	imgAnswer: "https://static.comicvine.com/uploads/original/11117/111173561/5367292-4508316669-53360.gif",
  },{
  	question: "Which alien race has the longest average life span?",
  	yesAnswer: "Time Lords",
  	noAnswer: ["Romulans", "Wookies", "Vulcans"],
  	imgAnswer: "http://readeroffictions.com/wp-content/uploads/2015/07/gif-old-doctor-who.gif",
  }, {
  	question: "Mogo is a genderless member of the Green Lantern Corps. and is remarkable because they are:",
  	yesAnswer: "a living planet",
  	noAnswer: ["an immortal demi-god", "a traitorous spy", "from another dimension"],
  	imgAnswer: "http://24.media.tumblr.com/tumblr_lmnc6bYrT61qa69wso1_500.gif",
  }]
}
var timeClock = 30
var answers = []
var correctAnswers = 0
var wrongAnswers = 0
var myTimer
var currentQ = 0
var isCorrect = false

// start button activation
$(document).ready(function startButton() {
	 $("#ongo").on("click", function() {
	 	// hides the button
	 	$("#ongo").addClass("hidden");
	 	removeQ();
	 	start();
	 })
})

function start() {
	// writes the question to the page 
	$("#timer").text("Seconds left: " + timeClock).addClass("timerStyle");
 	qClock();
 	$("#question").addClass("questionP").text(qs.hereMyQuestions[currentQ].question);
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
		$("<p>" + answers[i] + "</p>" + "<hr>").addClass("hoverThing answersP").attr("data-value", answers[i]).appendTo("#answers");
	}
}

// 30 second timer 
function qClock() {
	timeClock = 30;
	myTimer = setInterval(decrement, 1000);

	function decrement() {
      	if (timeClock > 0) {
			timeClock--;
			$("#timer").text("Seconds left: " + timeClock);
		} 
		else {
	        isCorrect = false;
	        removeQ();
	        answers = [];
	        stop();
			timesUp();
			currentQ++;
      	}
    }
}

// stops and clears the timer, resets value
function stop() {
  	clearInterval(myTimer);
  	timeClock = 30;
}

// registers click and compares to right answers
$(document).on("click", ".hoverThing", function() {
	var userAnswer = this;
	if (($(this).attr("data-value")) === qs.hereMyQuestions[currentQ].yesAnswer) {
		isCorrect = true;
		resultYesNo();
	}
	else {
		isCorrect = false;
		resultYesNo();
	}
});

// removes current text 
function removeQ() {
	$("#question").empty();
	$("#answers").empty();
	$("#timer").removeClass("timerStyle").empty();
	$("#img-result").empty();
}

// displays this text for 3 seconds if correct answer
function resultYesNo() {
	answers = [];
	stop();
	removeQ();
	if (isCorrect) {
		isCorrect = false; 
		correctAnswers++; 
		myTimer = setTimeout(yesDelete, 3000);
		$("#question").text("That's right!  It's " + qs.hereMyQuestions[currentQ].yesAnswer + ".");
		$("<img src='" + qs.hereMyQuestions[currentQ].imgAnswer + "' />").addClass("img-responsive imgStyle").appendTo("#img-result");
	}
	else {
		myTimer = setTimeout(yesDelete, 3000);
		wrongAnswers++;
		$("#question").text("Nope!  It's " + qs.hereMyQuestions[currentQ].yesAnswer + ".");
		$("<img src='" + qs.hereMyQuestions[currentQ].imgAnswer + "' />").addClass("img-responsive imgStyle").appendTo("#img-result");
	}
	currentQ++; 
}

// displays this text for 3 seconds if time runs out
function timesUp() {
	myTimer = setTimeout(yesDelete, 3000);

	$("#question").text("Time's Up!  The correct answer is: " + qs.hereMyQuestions[currentQ].yesAnswer + ".");
	$("<img src='" + qs.hereMyQuestions[currentQ].imgAnswer + "' />").addClass("img-responsive imgStyle").appendTo("#img-result");
}

// deletes result information from the DOM
function yesDelete() {
	$("#question").empty();
	$("#img-result").empty();
	clearTimeout(myTimer);
	
	if (currentQ < qs.hereMyQuestions.length) {
		start();
	}
	else if (currentQ === qs.hereMyQuestions.length) {
		atTheEnd();
	}
}

// empties the page, calls the last page function
function atTheEnd() {
	removeQ();
	$("#img-result").empty();
	lastPage();
}

// displays the tally of correct and wrong answers on the final screen, un-hides the button for restart
function lastPage() {
	var purpleProse = $("<p>").text("Based on your answers, we judge your level of expertise to be: ");

	if (correctAnswers > 10) {
		purpleProse.appendTo("#timer");
		$("<p>").text("Intergalactic nerd living in the basement of your mom's spaceship.").appendTo("#timer");
	}

	else if (correctAnswers > 7 && correctAnswers < 11) {
		purpleProse.appendTo("#timer");
		$("<p>").text("Probably a sketchy smuggler and/or trader in alien artifacts.").appendTo("#timer");
	}

	else if (correctAnswers > 5 && correctAnswers < 8) {
		purpleProse.appendTo("#timer");
		$("<p>").text("Captain of the Starship Winterprise (Starship Enterprise knock off brand).").appendTo("#timer");
	}

	else if (correctAnswers > 3 && correctAnswers < 6) {
		purpleProse.appendTo("#timer");
		$("<p>").text("Accidentally discovered an authentic alien history book in your grandfather's attic, sold it for the price of a sandwich when you were in college.").appendTo("#timer");
	}

	else if (correctAnswers < 3) {
		purpleProse.appendTo("#timer");
		$("<p>").text("Sentient celery stalk.").appendTo("#timer");
	}

	$("<p>").text("Correct answers: " + correctAnswers).addClass("lastPageStyle").appendTo("#answers");
	$("<p>").text("Wrong answers: " + wrongAnswers).addClass("lastPageStyle").appendTo("#answers");
	$("<p>").text("Wanna play again?").addClass("lastPageStyle").appendTo("#answers");
	$("#ongo").text("begin (another) journey").removeClass("hidden");
	currentQ = 0;
	correctAnswers = 0;
	wrongAnswers = 0; 
}