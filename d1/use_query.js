/*
nodejs 내장객체중 query string내장객체를 학습한다
*/
var url=require("url");
var query= require("querystring");
var result=query.parse("http://news.naver.com/main/read.nhn?mode=LPOD&mid=sec&oid=001&aid=0008548934&isYeonhapFlash=Y");

console.log(result);

