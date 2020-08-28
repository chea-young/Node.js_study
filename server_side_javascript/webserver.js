const http = require('http');
 
const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
}).listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});
//Node.js를 이용해서 Webserver를 만들고 그 웹서버가 1337번을 listening을 하게 만드는 코드고
//127.0.0.1이면 응답하라라는 코드이다

// web브라우저를 통해서 요청한 내용을 받아서 Hello World를 전송한것이다.