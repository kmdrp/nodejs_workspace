/*
nodejs를 이용하면 자바스크립트에서도 데이터베이스 연동
프로그래밍이 가능하다 

내장모듈로 해결되지않는 부분은 외부의 모듈을 추가하여 개발하면된다
이방법이 nodejs 가 위력을 발휘하는이유
전세계개발자들이 새로운 모듈들을 개발하여 공개중이다
*/

var mysql=require("mysql");

//접속시도!

var client=mysql.createConnection({
	"url":"localhost",
	"user":"root",
	"password":"",
});

client.query("use iot");

//한건 넣기
client.query("insert into student('id','pwd','name') values('batman','111','브루스')");
