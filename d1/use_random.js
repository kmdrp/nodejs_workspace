//외부의 필요한 모듈을 사용하기위해서는 require 함수안에 필요한 모듈명을명시하면된다

var mm=require("./mymodule");
function test(){
	var r =mm.getRandom(5);
	console.log("5에대한 랜덕밧"+r);

	setTimeout(function(){
		test();
	},500);
}

test();

/*
var ext=mm.getExtend("test.png");
console.log(ext);
*/
