/*jshint esversion: 6 */
function text(s) {
	'use strict';
	let str = s.toLowerCase();
	let i = 0;
	let j = str.length - 1;

	if (str.length == 2) {
		if (str.charCodeAt(0) < 97 || str.charCodeAt(0) > 122 || str.charCodeAt(1) < 97 || str.charCodeAt(1) > 122) {
			if (str.charCodeAt(0) > 47 && str.charCodeAt(0) < 58 || str.charCodeAt(1) > 47 && str.charCodeAt(1) < 58) {
				if (str[0] !== str[1]) {
					return false;
				}
			}
		}
	}

	while (i < j) {
		if (str.charCodeAt(i) == str.charCodeAt(j)) {
			i++;
			j--;
		} //如果相等 移动指针

		if (str.charCodeAt(i) < 48 || (str.charCodeAt(i) > 57 && str.charCodeAt(i) < 97) || str.charCodeAt(i) > 122) {
			i++;
			continue;
		} //如果左指针不是数字或字母就往右移

		if (str.charCodeAt(j) < 48 || (str.charCodeAt(j) > 57 && str.charCodeAt(j) < 97) || str.charCodeAt(j) > 122) {
			j--;
			continue;
		} //如果右指针不是数字或字母就往左移

		if (str.charCodeAt(i) !== str.charCodeAt(j)) {
			return false;
		}

	}
	return true;
}
var result = text("1a2");
console.log(result);
// "v' 5:UxU:5 v'"
// A man, a plan, a canal: Panama
//"race a car"
//1a2
//