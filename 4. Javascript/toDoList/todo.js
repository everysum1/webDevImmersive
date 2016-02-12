var todos = [];

var answer = prompt("What would you like to do?")

while (answer !== "quit") {
	if (answer === "new") {
		var newTask = prompt("What would you like to add to the list?");
		todos.push(newTask);

	} else if (answer === "list") {
		console.log(todos);
	} 

	answer = prompt("What would you like to do?")
}

console.log("You have quit the app");
