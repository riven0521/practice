/*jshint esversion: 6 */
function test(x) {
	'use strict';
	let x1 = x;
	let i = 0;
	while (x != 0) {
		x1 = Math.floor(x1 / 10);
		i++;
	}
	console.log(i);
}


var result = test(121);
console.log(result);