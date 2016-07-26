/*
모듈은 개발자가 정의할수도있지만 이미 nodejs 자체적으로
제공되는 유요한 모듈도잇다.
*/
var http=require("http");//웹서버 구축하는 모듈 http모듈을 사용!
//http변수로 해당 모듈을 가리킴

var server=http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	response.end("<marquee> hi</marquee>");

});//create sever module

//웹서버 가동하기

server.listen(9999,function(){
	console.log("server is running 9999port....");
});