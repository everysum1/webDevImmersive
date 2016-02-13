function isEven(num) {
	// if (num % 2 === 0) {
	// 	return true;
	// } else {
	// 	return false;
	// }
	return num % 2 === 0;
}

function factorial(num) {
	if (num === 0) {
		return 1;
	} else if (num === 1) {
		return 1;
	} else if (num > 1) {
		return num * factorial(num-1);
	}
}

function kebabToSnake(string) {
	return string.replace("-", "_");
}