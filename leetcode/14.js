/*jshint esversion: 6 */
// 参数名跟题目改成一致
function test(strs) {
	/*把下面代码粘到网站的函数内*/
	'use strict';
	if (strs.length == 1) {
		return strs[0];
	}
	let minStr = '';
	let charCheck = '';
	let isEnd = false;
	for (let i = 0; i < strs[0].length; i++) {
		for (let j = 0; j < strs.length; j++) {
			let strNow = strs[j];

			if (i >= strNow.length) {
				if (j != 0) {
					isEnd = true;
				}
				break;
			}
			let charNow = strNow[i];

			if (j == 0) {
				charCheck = charNow;
				minStr += charCheck;
				continue;
			}

			if (charNow != charCheck) {
				isEnd = true;
				break;
			}
		}
		if (isEnd) {
			break;
		}

	}
	if (isEnd) {
		minStr = minStr.substring(0, minStr.length - 1);

	}
	return minStr;
	/*************************/

}

//传递的参数就是测试案例
var result = test(["flower", "flower", "flower", "flower"]);
console.log(result);





// // 参数名跟题目改成一致
// function test(strs) {
// 	/*把下面代码粘到网站的函数内*/
// 	'use strict';
// var str = '';
// 	var str1 = '';
// 	for (var i = 0; i < strs.length; i++) {
// 		if (strs[0][i] == strs[1][i] && strs[0][i] == strs[2][i]) {
// 			str += strs[0][i];
// 		}

// 	}
// 	if (str == '') {
// 		return str1;
// 	} else {
// 		return str;
// 	}
// 	// return str;
// 	// if (strs[0][0] == strs[1][0] && strs[0][0] == strs[2][0]) {
// 	// 	str = strs[0][0];
// 	// }
// 	// if (strs[0][1] == strs[1][1] && strs[0][1] == strs[2][1]) {
// 	// 	str = strs[0][0]+strs[0][1];
// 	// }

// 	// return str;

// 	//传递的参数就是测试案例
// }
// var result = test(["a1dog", "a1racecar", "a1car"]);
// console.log(result);