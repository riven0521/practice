/*jshint esversion: 6 */
function test(x) {
	'use strict';
	var z = 0;
	var y = x;
	let x1 = x;
	var i = 0;
	while (x1 != 0) {
		x1 = Math.floor(x1 / 10);
		i++;
	}
	console.log(i);
	for (var j = 0; j < i; j++) {
		z = z * 10 + x % 10;
		x = Math.floor(x / 10);
		if (z == y) {
			return true;
		} 
	}
	return false;
}



var result = test(12321);
console.log(result);