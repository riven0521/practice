/*jshint esversion: 6 */
function text(nums, val) {
	'use strict';
	let l = 0;
	let r = nums.length - 1;
	while (r >= 0 && nums[r] == val) r--;
	while (l < r) {
		if (nums[l] == val) {
			let t = nums[r];
			nums[r] = nums[l];
			nums[l] = t;
			while (r >= 0 && nums[r] == val) r--;
		}
		l++;
	}
	console.log(nums);
	return r == -1 ? 0 : r + 1;

	/*上面这个叫三元运算符
	 *条件?值1:值2
	 *如果条件为真那值为值1 
	 *如果条件为假那值为值2
	 *你需要去搜了解下
	 */
}

var result = text([2,3,2,3,1,3], 3);
console.log(result);