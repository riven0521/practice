/*jshint esversion: 6 */
// 参数名跟题目改成一致
function test(strs) {
    /*把下面代码粘到网站的函数内*/
    'use strict';
    if (strs.length == 1) {
        return strs[0];
    }
    for (let i = 0; i < strs[0].length; i++) {
        var char1 = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if(strs[j][i]!=char1||strs[j].length==i){
                return strs[0].substr(0,i);
            }
        }
    }
    return strs[0];
}

//传递的参数就是测试案例
var result = test(["flowe", "fliwe", "fliw"]);
console.log(result);