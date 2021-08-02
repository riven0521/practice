/*jshint esversion: 6 */
//a是分子，b是分母。约分
function test(a,b) {
	/*在这里写代码*/
for(var i=a;i>=2;i--){
	if(a%i==0&&b%i==0){
		a=a/i;
		b=b/i;
	}
}

	/*在这里写代码*/

	return {a,b};
}
var {a,b} = test(6,18);
console.log(a+"/"+b);

//返回的 a为1，b为3