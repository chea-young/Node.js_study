var http = require('http');
var fs = require('fs');
var url = require('url'); //'url'이라는 모듈을 사용할 것이라는 선언,  url이라는 변수를 사용할 것이다.

var app = http.createServer(function(request,response){
    var _url = request.url; // id 값이 이것에게 반영이 된다.
    var queryData = url.parse(_url, true).query; // 객체가 들어간다.
    console.log(queryData.id); // id의 값이 들어간다
    if(url == '/'){
      url = '/index.html';
    }
    if(url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname +url); //사용자가 접근할 때 마다 js를 통해서 우리가 읽어드릴 파일을 읽어서 가져오게 된다.
    //response.end(fs.readFileSync(__dirname + url)); //여기에 들어가는 값을 어떻게 바꾸냐에 따라 사용자에게 전달하는 값이 달라지게 된다.
    response.end(queryData.id);

});
app.listen(3000); //localhost:3000 으로 webserver가 열린다.