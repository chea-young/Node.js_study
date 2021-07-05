var testFolder = './data'; // 현재 실행하는 data 기준임으로 web1_html_internet에서 실행해야 한다.
var fs = require('fs');
 
fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})