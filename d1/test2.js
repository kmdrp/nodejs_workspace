/*
node js 가 자바스크립트이긴하나 기존 자바스크립트에는 없는
기능들이 있다 그중 전역변수와 전역함수를 학습한다 
__filename: 현재 실행되고있는 파일의 풀경로
__dirname: 현재 실행하고있는 파일의 디렉토리경로
*/
/*

var path=__filename;
var filename=path.substring(path.lastIndexOf("\\")+1,path.length);
console.log("!"+filename);
*/
var path=__filename;
var filename=path.split("\\");
console.log(filename[4]);


console.log(__dirname);