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
	return z + 1;
}



var result = text([3, 2, 1, 4, 3, 5, 7], 3);
console.log(result);

function textOfCyberRim(nums, val) {
	'use strict';
	var l = 0;
	var r = nums.length - 1;
	while (r >= 0 && nums[r] == val) r--;
	while (l < r) {
		if (nums[l] == val) {
			var t = nums[r];
			nums[r] = nums[l];
			nums[l] = t;
			while (r >= 0 && nums[r] == val) r--;
		}
		l++;
	}
	return r == -1 ? 0 : r + 1;
	/*上面这个叫三元运算符
	 *条件?值1:值2
	 *如果条件为真那值为值1 
     *如果条件为假那值为值2
     *你需要去搜了解下
	*/
}