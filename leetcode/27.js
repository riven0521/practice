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



var result = text([4, 5], 4);
console.log(result);

// function textOfCyberRim(nums, val) {
// 	'use strict';
// 	let l = 0;
// 	let r = nums.length - 1;
// 	while (r >= 0 && nums[r] == val) r--;
// 	while (l < r) {
// 		if (nums[l] == val) {
// 			let t = nums[r];
// 			nums[r] = nums[l];
// 			nums[l] = t;
// 			while (r >= 0 && nums[r] == val) r--;
// 		}
// 		l++;
// 	}
// 	return r == -1 ? 0 : r + 1;
// 	/*上面这个叫三元运算符
// 	 *条件?值1:值2
// 	 *如果条件为真那值为值1 
// 	 *如果条件为假那值为值2
// 	 *你需要去搜了解下
// 	 */
// }