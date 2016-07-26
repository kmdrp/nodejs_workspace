/*
내장모듈중 url모듈을 학습한다!
URL : 자원의 위치 unitformed resource locator
*/
var url=require("url");

//특정데이터로부터 의미있는 데이터를 추출하는 과정:파싱
//url 객체의 parse()는 지정한 정보에대한 해석후 json 형태의 객체를 반환해준다
var obj=url.parse("http://news.naver.com/main/read.nhn?mode=LPOD&mid=sec&oid=001&aid=0008548583&isYeonhapFlash=Y");

console.log(obj);
