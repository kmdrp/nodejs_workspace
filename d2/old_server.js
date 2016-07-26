/*
nodejs 는 완제품이아니다 따라서 서버를 직접 
코드로 작성해야한다.
하지만 nodejs의 자체의 문법및 내장 외부 모듈들을 이용하면
서버구축은 상당히 쉬워진다
*/

//내부모듈중 http 모듈가져오기
var http=require("http");

//파일의 내용을 읽어들일수있는 내부모듈
var fs=require("fs");


//서버 객체생성
var server=http.createServer(function(request,response){

	//server는 이미 W3C가 정해놓은 형식에 맞춰서 클라이언트에게 응답해야하므로
	//아래와같은코드가 작성되어야한다
	response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	

	//console.log("yellow");
	//end()의 인수에는 클라이언트가 받게될 문자열 컨텐츠를 넣을수있다. 
	//console.log(request.url);
	
	var data;
	//   /yellow.html 같은디렉토리 ....???
	if(request.url!="/favicon.ico"){
		data=fs.readFileSync("."+request.url,"utf8");
		console.log("request.url")
	}


	//클라이언트가 green.html을 원하면
	/*if(request.url=="/green.html"){
		console.log("green!");
	}else if(request.url=="/yellow.html"){
		console.log("yellow");
	}	
	*/
	//클라이언트가 yellow.html을 원하면
	
	response.end(data);
});

//서버가동
server.listen(8383,function(){
	console.log("server is running at 8383 port.....");
});

//
