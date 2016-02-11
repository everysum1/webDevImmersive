var age = prompt("Enter your age:")

if (age < 0) {
	console.log("That's impossible! That means you haven't been born yet!")
}

else if (age < 18) {
	console.log("Sorry, you aren't allowed in, kid.  Beat it!")
}

else if (age < 21) {
	console.log("Alright, you can come in...but you can't drink!")
}

else if (age === 21) {
	console.log("Happy 21st Birthday!")
}
else if (age > 21) {
	console.log("Come on in...AND you can drink!")
}
 
if (age % 2 === 1) {
	console.log("That's an ODD age haha!")
}


if (Math.sqrt(age) % 1 === 0) {
	console.log("Perfect Square!")
}