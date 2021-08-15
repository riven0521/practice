/*jshint esversion: 6 */
function text(haystack, needle) {
    'use strict';
    if (haystack == '') {
        if (needle != 0) {
            return -1;
        }
        return '';
    }
    for (let i = 0; i < haystack.length; i++) {
        let j = 0;
        for (; j <= needle.length; j++) {
            if (j == needle.length) {
                return i;
            }
            if (haystack[i + j] == needle[j]) {
                continue;
            } else {
                break;
            }
        }
    }
    return -1;
}
var result = text("b", "a");
console.log(result);