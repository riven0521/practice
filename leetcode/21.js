/*jshint esversion: 6 */
function test(l1, l2) {

    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = (l1.next, l2);
        return l1;
    } else {
        l2.next = (l1, l2.next);
        return l2;
    }


}

/***********自己改这两个数组********/
const arr1 = [1, 2, 4];
const arr2 = [1, 3, 4];
/*******************************/


/********用上面两数组转换成两链表l1和l2*********/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function arrToList(arr) {
    let lH = null;
    let lT = lH;
    arr.forEach((n) => {
        const node = new ListNode(n);
        if (lH == null) {
            lH = node;
            lT = lH;
        } else {
            lT.next = node;
            lT = lT.next;
        }
    });
    return lH;
}
function listToArr(node){
    const arr = [];
    while(node!=null){
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}
const l1 = arrToList(arr1);
const l2 = arrToList(arr2);
/*******************************/

const result = listToArr(test(l1, l2));
console.log(result);