/*jshint esversion: 6 */
function test(nums) {
	'use strict';
	if (nums.length == 1) {
		return nums;
	}
	let i = 0;
	for (var j = 0; j < nums.length; j++) {
		if (nums[i] != nums[j]) {
			i++;
			nums[i] = nums[j];
		}
	}
	return i+1;
}
var result = test([1, 1, 2, 2, 2, 3, 4, 5]);
console.log(result);