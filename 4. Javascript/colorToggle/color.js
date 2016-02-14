console.log("connected");


// document.querySelector("button").addEventListener("click", toggleColor);

// function toggleColor() {

// 	if (document.body.style.background === "") {
// 		document.body.style.background = "purple"
// 	} else if (document.body.style.background === "purple") {
// 		document.body.style.background = ""
// 	}
// }

var button = document.querySelector("button")

button.addEventListener("click", function() {
	document.body.classList.toggle("purple")
})