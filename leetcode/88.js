/*jshint esversion: 6 */
function text(nums1, m, nums2, n) {
	'use strict';
	let i = m - 1;
	let j = n - 1;
	let k = m + n - 1;
	let temp;
	nums1.length = m + n;

	while (k >= 0) {
		if (i < 0) {
			nums1[k] = nums2[j];
			k--;
			j--;
			continue;
		}
		if (j < 0) {
			nums1[k] = nums1[i];
			k--;
			i--;
			continue;
		}

		if (nums1[i] > nums2[j]) {
			nums1[k] = nums1[i];
			k--;
			i--;
			continue;
		}
		if (nums1[i] < nums2[j]) {
			nums1[k] = nums2[j];
			k--;
			j--;
			continue;
		}

		if (nums1[i] == nums2[j]) {
			nums1[k] = nums2[j];
			j--;
			k--;
			continue;
		}


	}

	return nums1;

}
var result = text([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log(result);
// || nums1[i] == nums2[j]