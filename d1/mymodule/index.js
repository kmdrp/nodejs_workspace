/*
nodejs 에서 개발자가객체를 정의할수있는데,
특히 nodejs에서는 저장된 파일을 모듈이라고한다..
*/


exports.getRandom=function (){
	return parseInt(Math.random()*3);
}

exports.getExtend=function(path){
//파일의 확장자를 반환해주는 메소드
	var filename=path.substring(path.lastIndexOf("\\")+1,path.length);
	return filename.split(".")[1];
}