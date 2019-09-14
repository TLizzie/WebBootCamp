function fatorial(num) {
	var result = 1;
	for (var i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}


function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}


var todos = ["Buy the turtle"];
window.setTimeout(function() {

}, 500);