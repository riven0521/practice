/*jshint esversion: 6 */
function text(arr) {
	'use strict';
	let i = 0;
	let j = arr.length - 1;
	while (i < arr.length) {
		if (arr[i] < arr[i + 1]) {
			i++;
		} else {
			break;
		}
	}
	while (j < arr.length) {
		if (arr[j - 1] > arr[j]) {
			j--;
		} else {
			break;
		}
	}
	if (i != 0 && i == j && j != arr.length - 1) {
		return true;
	} else {
		return false;
	}

}
var result = text([2, 3, 4, 5, 3, 2, 1, 0]);
console.log(result);