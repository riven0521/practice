/*jshint esversion: 6 */
function text(s) {
	'use strict';
	let i = s.length - 1;
	while (i >= 0) {
		if (s[i] == ' ') {
			i--;
		} else {
			break;
		}
	}
	if (i < 0) {
		return 0;
	}
	let j = i;
	while (j >= 0) {
		if (s[j] != ' ') {
			j--;
		} else {
			break;
		}
	}
	return i - j;

}
var result = text("a");
console.log(result);