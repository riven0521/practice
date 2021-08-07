/*jshint esversion: 6 */
// 参数名跟题目改成一致
function test(strs) {
    /*把下面代码粘到网站的函数内*/
    'use strict';
    if (strs.length == 1) { //判断是否为空
        return strs;
    }
    let charCheck = '';
    let minStr = '';
    let end = false;
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) { //比较第一个字符
            let strNow = strs[j];
            if (i >= strNow.length) {
                if (j != 0) {
                    end = true;
                }
                break;
            }
            let charNow = strNow[i];
            if (j == 0) {
                charCheck = charNow;
                minStr += charCheck;
                continue; //中断迭代；
            }
            if (charNow != charCheck) {
                end = true;
                break;
            }
        } //结束j循环
        if (end) {
            break;
        }
    } //结束i循环
    if (end) {
        minStr = minStr.substring(0, minStr.length - 1);
    }
    return minStr;
}

//传递的参数就是测试案例
var result = test(["flower", "flower", "flower", "flower"]);
console.log(result);