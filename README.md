# Node.js

### Web server
- #### Django, PHP, node.js 는 사용자에게 보낼 데이터를 프로그램적으로 생성한다.
### Node.js
- #### 다음과 같은 구조로 쌓아서 runtime을 다운 받고 javascipt를 수정해서 Node.js Application을 만들게 된다.
<img src = "img\node.js-1.png"  alt = "1">

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
- 다른 사람의 모듈 사용하기
    - npm init (description만 사용하기) --> package.json이 생성


#### 다음에 학습할 부분
- https://www.youtube.com/watch?v=jlryXeiNt9o&list=PLuHgQVnccGMA9QQX5wqj6ThK7t2tsGxjm&index=7
#### 참고 사이트
- https://www.youtube.com/playlist?list=PLuHgQVnccGMA9QQX5wqj6ThK7t2tsGxjm
    보고 따라서 공부하기!!
