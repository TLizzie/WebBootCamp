console.log("-10 between 19");
var start1 = -10;
while (start1 <= 19) {
	console.log(start1);
	start1++;
}

console.log("10 between 40");
var start2 = 10;
while (start2 <= 40) {
	if (start2 % 2 == 0) {
		console.log(start2);
		start2 += 2;
	} else {
		start++;
	}
	
}

console.log("300 between 333");
var start3 = 300;
while (start3 <= 333) {
	if (start3 % 2 != 0) {
		console.log(start3);
		start3 += 2;
	} else {
		start3++;
	}	
}

console.log("5 between 50");
var start4 = 5;
while (start4 <= 50) {
	if (start4 % 5 == 0 && start4 % 3 == 0) {
		console.log(start4);
		start4 += 5;
	} else {
		start4++;
	}	
}