var secretNumber = 7
var guess = Number(prompt("Guess a number: "));


if (guess === secretNumber) {
	alert("You guessed it!!!")
}
else if (guess > secretNumber) {
	alert("Too high, guess again...")
}
else {
	alert("Too low, guess again...")
}
