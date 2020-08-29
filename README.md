# Node.js

### 실행하는 방법
- cmd에서 'node js파일' 하면 실행된다.


### 인터넷의 동작 방법
- 관계 : 클라이언트 ----- 서버
webbrower(요청하는 쪽) -> 클라이언트, 
응답, 제공하는 쪽 -> 서버
domain과 일치하는 IP로 접속한다.(domain은 사람들이 쉽게 접근하기 쉽게 만든 것)
- 포트는 0 ~ 655535까지 존재

#### NPM(Node Package Manager)
- uglifyjs : 기계가 코드를 처리하는 데 필요한 필수적인 코드를 제외한 나머지 공백을 다 제거하는 단계의 코드를 만들어줌
    - uglifyjs -m : 지역변수와 같이 바꿔도 상관없는 것까지 한글자의 가장 짧은 것들로 바꿔 줌
    - uglifyjs pretty.js -o pretty.min.js -m
    pretty.min.j에 그 상태로 저장된다.
