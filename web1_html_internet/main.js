var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname +url); //사용자가 접근할 때 마다 js를 통해서 우리가 읽어드릴 파일을 읽어서 가져오게 된다.
    response.end(fs.readFileSync(__dirname + url)); //여기에 들어가는 값을 어떻게 바꾸냐에 따라 사용자에게 전달하는 값이 달라지게 된다.
 
});
app.listen(3000); //localhost:3000 으로 webserver가 열린다.