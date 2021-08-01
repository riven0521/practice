function test(n) {
	/*在这里写代码*/
	for(var i=3;i<=n;i++){
		var flag = true;
		for(var j=2;j<i;j++){
			if(i%j==0){
				flag=false;
				break;
			}
		}
		if(flag == true){
			console.log(i);
		}
	}
	return '结束';
	/*在这里写代码*/
}


result = test(99);
console.log(result);