var todos = [];

var answer = prompt("What would you like to do?")

while (answer !== "quit") {

	if (answer === "new") {
		addToDo();
	} else if (answer === "list") {
		listToDos();
	} else if (answer === "delete") {
		deleteToDo();
	}

	answer = prompt("What would you like to do?")
}

console.log("You have quit the app");

function addToDo() {
	var newTask = prompt("Enter new to do:");
	todos.push(newTask);
	console.log("Item Added")
}

function listToDos() {
	console.log("**********************");
	todos.forEach(function(todo, i) {
		console.log((i+1) + ": " + todo);
	})
	console.log("**********************");
}

function deleteToDo() {
	var index = prompt("Enter number of the item to remove:")
	todos.splice(index-1, 1);
	console.log("Item Deleted")
}