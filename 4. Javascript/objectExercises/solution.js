var movies = [
	{
		title: "Fear and Loathing in Las Vegas",
		rating: 5,
		haveSeen: true
	},
	{
		title: "You've Got Mail",
		rating: 3,
		haveSeen: true
	},
	{
		title: "Momento",
		rating: 4,
		haveSeen: true
	},
	{
		title: "Bill and Ted's Excellent Adventure",
		rating: 3,
		haveSeen: false
	},
	{
		title: "The Empire Strikes Back",
		rating: 4.5,
		haveSeen: true
	}
]

movies.forEach(function(movie) {
	console.log(movieSentence(movie))
});

function movieSentence(movie) {
	var sentence = "You have "
	var seen = movie.haveSeen ? "" : "not ";
	sentence += (seen + "seen \"" + movie.title + "\" ~ " + movie.rating + " stars")
	return sentence;
}