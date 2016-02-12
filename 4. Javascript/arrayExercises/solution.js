
function printReverse(arr) {
	for (var i = arr.length-1; i >= 0; i--) {
		console.log(arr[i])
	}
}

function isUniform(arr) {
	var model = arr[0]
	for (var i = 1; i < arr.length; i++) {
		if (model !== arr[i]) {
			return false;
		}
	}
	return true;
}

function sumArray(arr) {
	accum = arr[0];
	for (var i = 1; i < arr.length; i++) {
		accum += arr[i];
	}
	return accum;
}

function max(arr) {
	maxNumber = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > maxNumber) {
			maxNumber = arr[i];
		}
	}
	return maxNumber;
}