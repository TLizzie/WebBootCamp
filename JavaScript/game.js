
alert("Hello!");

var secretNum = 4;

var guess = Number(prompt("Guess a number"));
// alert(guess);

if (guess == secretNum) {
	alert("you get it right");
} else if(guess > secretNum) {
	alert("too high");
} else {
	alert("too low");
}