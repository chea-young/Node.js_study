var args = process.argv;
console.log(args);
// args[0] : runtime이 어디에 위치하고 있는지에 대한 정보
// args[1] : 실행시킨 이 파일의 경로
// args[2~] : 입력한 입력 값을 준다. -> args는 args[2]부터 count 해야 입력 값을 받을 수 있다. 

console.log('A');
console.log('B');

if(args[2] === '1'){
  console.log('C1');
} else {
  console.log('C2');
}
console.log('D');