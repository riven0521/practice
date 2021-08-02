//冒泡排序
function test(array) {
	// /*在这里写代码*/
	for (j = 0; j < array.length - 1; j++) {
		for (i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				var c;
				c = array[i];
				array[i] = array[i + 1];
				array[i + 1] = c;
				/*在这里写代码*/
			}
		}
	}
	return array;
}
result = test([5, 6, 7, 4, 2, 8, 11, 1]);
console.log(result);
result = test([0, 0, 7, 4, 2, 8, 5, 5]);
console.log(result);