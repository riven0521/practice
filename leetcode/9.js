/*jshint esversion: 6 */
function test(x) {
	'use strict';
	let x1 = x;
	let y = 0;
	while (x1 != 0) {
		y = y * 10 + x1 % 10;
		x1 = Math.floor(x1 / 10);
	}
	if (y == x) {
		return true;
	} else {
		return false;
	}
}



var result = test(1211);
console.log(result);