/*
원격지의 브라우저들이 내컴퓨터를 접속할수있도록 
웹서버를 구축한다!!
서버구축을 위해서는 내장모듈중 http모듈을 사용해야한다

*/

var http=require("http");
var fs=require("fs");

//http모듈에 createServer ㄱ메서드를 호출하면 server 객체를 반환해줌
var server=http.createServer(function(request,response){
	
	//client 의 브라우저에 보내게될 요청 헤더정보 구성
	//200: ㄹ웹서버가 요청을 성공적으로 처리했다는 응답결과코드(web standard)
	response.writeHead(200,{"Content-Type":"text/html charset=utf-8"});


	//클라이언트에게 응답하기 저넹 파일시스템을 이용하여 html문서를 읽어들이자
	//읽어들이자

	var data=fs.readFileSync("regist_form.html","utf8");
	

	response.end(data);

});

//서버 가동!
server.listen(9999,function(){
	console.log("서버가 9999번 포트에서 실행중입니다...");
});