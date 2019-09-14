// console.log("done")

var todos = ["buy new Turtle"];
var input  = prompt("what would you like to do?");

while (input !== "quit") {
	if (input === "list") {
		// console.log("************")
	todos.forEach(function(todo, index) {
	});	
	// console.log("************")
	} else if (input === "new") {
		var newTodo = prompt("enter new todo");
		todos.push(newTodo);
	} else if (input === "delete") {
		var index = prompt("Enter index of ToDo to delete");
		// which index to delete, num of items
		todos.splice(index, 1);
	}
	
	input  = prompt("what would you like to do?");
}

console.log("OK, you quit the app.");

// function 不带括号是在loop中使用 不直接调用
// fucntion后面跟了() 就是直接调用
// arr.forEach(function()) {

// }
