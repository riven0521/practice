/*jshint esversion: 6 */
function test(n) {
	'use strict';
	var p1 = 1;
	var p2 = 2;
	var temp;
	if (n < 3) {
		return n;
	}
	for (var i = 3; i <= n; i++) {
		// p3=p1+p2+2;
		// p4=p2+p3+2;
		temp = p1 + p2;
		p1 = p2;
		p2 = temp;


	}
	return temp;

}
var result = test(3);
console.log(result);