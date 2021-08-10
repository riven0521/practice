/*jshint esversion: 6 */
function text(nums, val) {
	'use strict';
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
	return nums;
}



var result = text([3, 2, 1, 4, 3, 5, 7], 3);
console.log(result);