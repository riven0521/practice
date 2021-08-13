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
            if (str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) {
                i++;
                j--;
            }
            if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
                i++;
                j--;
            }
        }
        // if (str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58 ) {
        //  if (str[i] == str[j]) {
        //      i++;
        //      j--;

        //  } else {

        //  }

        // }
        //  str.charCodeAt(j) > 47 && str.charCodeAt(j) < 58
        if (str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) {
            
        }



        if (str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122 || str.charCodeAt(j) < 97 || str.charCodeAt(j) > 122) {
            if (str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) {
                i++;
            }
            if (str.charCodeAt(j) < 97 || str.charCodeAt(j) > 122) {
                j--;
            }
            continue;
        }
        // if (str.charCodeAt(j) < 97 || str.charCodeAt(j) > 122) {

        //  continue;
        // }

        if (str.charCodeAt(i) !== str.charCodeAt(j)) {
            return false;
        }

    }
    return true;
}
var result = text("v' 5:UxU:5 v'");
console.log(result);
// "v' 5:UxU:5 v'"
// A man, a plan, a canal: Panama