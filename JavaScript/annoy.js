alert("co");

 var answer = prompt("are we there yet?");

// while (answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("are we there yet?");
// }


// if (answer === "yes") {
// 	alert("we made it");
// } else {

// }


while (answer.indexOf("yes") === -1) {
	var answer = prompt("are we there yet?");
}