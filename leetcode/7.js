/*jshint esversion: 6 */
function test(x) {
	'use strict';
	var reverse = 0;
	let j = 0;
	let x1 = x;
	let x2 = x;

	if (x < 0) {
		x1 = -x1;
		x = -x;
	}
	while (x1 != 0) {
		x1 = Math.floor(x1 / 10);
		j++;
	}

	for (let i = 0; i < j; i++) {
		reverse = reverse * 10 + x % 10;
		x = Math.floor(x / 10);

	}
	if (x2 < 0) {
		reverse = -reverse;
	}
	if (reverse > 2147483647 || reverse < -2147483648) {
		return 0;
	}
	return reverse;
}


var result = test(23);
console.log(result);