/*
http내장모듈로만은 오나전한 웹서버를 구축하기엔 너무나 부족
따라서 express 모듈을 사용
express 모듈? 웹서버 구축에 필요한 기능들을 위해http모듈에
추가시켜놓은 외부모듈... (http의 업그레이드 모듈 but!! http와express는 같이 사용한다 )

ejs 모듈을 이용하면 ,html 문서내에서 반복문 등의 기초적인 자바스크립트 문법이 적용될수있다..
*/
var http=require("http");//in
var express=require("express");//ex
var fs=require("fs");//in
var mysql=require("mysql");//ex
var bodyParser=require("body-parser");//ex
var ejs=require("ejs");//ex

//express 모듈로부터application 객체를 생성하자!!
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));//form 태그로 전송될 경우 이 속성 지정해야함
//mysql서버에 접속
var client=mysql.createConnection({
	"url":"localhost",
	"user":"root",
	"password":""
});

client.query("use iot");//사용할 디비선택

//applicatiaon객체란 ? 웹서버 역할을 담당할 객체
//웹서버 역할이란 ? 요청에대해 응답을 처리하는 역할./
/*
app.use(function(request, response){
	response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});	
	response.end("express 모듈로 구축한 서버의 응답메세지!");
});*/

//라우팅 미들웨어를 사용해본다 route란방향을 잡는것을 말하고
//nodejs에서는 원하는페이지를 나오게처리해준다
//app.use(app.router);//라우팅시  메서드()표시 X
app.route("/list").get(function (request, response){
	//list.html ,페이지를 읽어들인 결과를 page변수에담음
	var page=fs.readFileSync("./list.html","utf8");
	client.query("select * from student",function(error,records){
		if(!error){
			console.log(records);	
			response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
			response.end(ejs.render(page,{dataList:records}));
			//page를 하면서 렌더링하면서 2번째 인수로 전달한 객체를 렌더링 대상이된 html에 자동으로 전달
		}else{
			console.log("!!!!");
		}
	});
	
	
});



//클라이언트가 get방식으로 요청을 시도하면 동작하게될 메서드!
app.route("/regist_form").get(function(request, response){
	var data=fs.readFileSync("./regist_form.html","utf8");
	response.writeHead(200,{"Content-Type":"text/html;charset-utf-8"});
	response.end(data);
});


//등록을 원하면
app.route("/regist").post(function(request,response){
	//클라이언트가 보낸 데이터를 받고!! 
	//express 모듈사용시 request가 업그레이드가 되엇기때문에
	//console.log(request.body);
	var data=request.body;
	var id=data.id;
	var pwd=data.pwd;	
	var name=data.name;

	console.log("넘겨받은 id는 :"+id);
	console.log("넘겨받은 pw는 :"+pwd);
	console.log("넘겨받은 name :"+name);
	//paran() 메서드를 사용할수있다
      
	//받은데이터를 maridadb (데이터베이스) 넣는다!!
	//쿼리문 수행후 두번째 인수인 익명함수가 작동한다 개발자는 여기서 
	//등록 성공 or 실패여부를 확인할수있다
	client.query("insert into student(id,pwd,name) values('"+id+"','"+pwd+"','"+name+"')",function(error,records,field){
		if(!error){
			console.log("등록 실패입니다.");
		}else{
			console.log("성공");
			response.redirect("/list");//클라이언트의 브라우저로하여금 지정한 url로 다시 시도하라는명령
		}	
	});
});
//상세보기 요청이드러오면????
app.route("/detail/:id").get(function(request,response){
	var data=fs.readFileSync("./detail.html","utf8");
	console.log("유저가선택한아이디는:"+request.params.id);

	//user가 선택한 id를 get방시긍로 넘겨받앗어야지

	
	client.query("select * from student where id='"+request.params.id+"'",function(error,records){
		if(!error){
			console.log(records);
			response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
			response.end(ejs.render(data,{obj:records}));
		}	else{
			cosole.log("fail");
		
		}
	});
});
//삭제요청 처리
app.route("/delete/:id").get(function(request,response){
	var id=request.params.id;
	client.query("delete from student where id='"+id+"'",function(error,records){
		if(!error){
			response.redirect("/list");
		}else{
			console.log("delete fail ");
		}
	});

});
//app.use() 메서드 안에는 미들웨어라고불리는 각종express의 지원함수들이 자리잡을수잇다.
//middleware 강려크한 기능들

//server operation
http.createServer(app);
var server=http.createServer(app);
server.listen(8383,function(){
	console.log("Server is runnuing at port 8383...");
});
	