/*jshint esversion: 6 */
function text(nums, val) {
	'use strict';
	const n = nums.length;
	let left = 0;
	for (let right = 0; right < n; right++) {
		if (nums[right] !== val) {
			nums[left] = nums[right];
			left++;
		}
	}
	return nums;

}
var result = text([2, 3, 2, 3, 1, 3], 3);
console.log(result);