/*jshint esversion: 6 */
function text(nums, val) {
	'use strict';
	if (nums.length == 1) {
		if (nums[0] == val) {
			return 0;
		}
	}

	let i = 0;
	var temp = 0;
	var z = nums.length - 1;

	for (let j = 0; j < nums.length; j++) {
		if (z == i) {
			break;
		}
		if (nums[i] !== val) {
			i++;
		}

		if (nums[z] == val || nums[z] == nums[0] == val) {
			z--;
		}

		if (nums[i] == val) {
			temp = nums[i];
			nums[i] = nums[z];
			nums[z] = temp;
			z--;
		}

	}
	console.log(nums);
	return z + 1;
}



var result = text([5, 4], 4);
console.log(result);