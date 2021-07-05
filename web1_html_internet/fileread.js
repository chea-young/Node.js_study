var fs = require('fs');

fs.readFile('sample.txt', 'utf8', function(err, data){ //읽고 싶은 파일을 적기 utf8을 이용해서 우리가 읽을 수 있는 파일로 만든 것
  console.log(data);
});