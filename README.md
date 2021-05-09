# Node.js

## 공부 순서
01. 수업 소개
02. 수업의 목적
03. 설치
04. 공부방법
05. Node.js로 웹서버 만들기
06. JavaScript 문법
07. JavaScript 문법
08. JavaScript 문법
09. URL의 이해
10. URL을 통해서 입력된 값 사용하기
11. App 제작 - 동적인 웹페이지 만들기
12. Node.js의 파일 읽기 가능
13. App 제작 - 파일을 이용해 본문 구현

### Web server
- #### Django, PHP, node.js 는 사용자에게 보낼 데이터를 프로그램적으로 생성한다.

### Node.js
- #### 다음과 같은 구조로 쌓아서 runtime을 다운 받고 javascipt를 수정해서 Node.js Application을 만들게 된다.
<img src = "img\node.js-1.png"  alt = "1">

### 실행하는 방법
- #### cmd에서 'node js파일' 하면 실행된다.

### 인터넷의 동작 방법
- 관계 : 클라이언트 ----- 서버
webbrower(요청하는 쪽) -> 클라이언트, 
응답, 제공하는 쪽 -> 서버
domain과 일치하는 IP로 접속한다.(domain은 사람들이 쉽게 접근하기 쉽게 만든 것)
- 포트는 0 ~ 655535까지 존재
- parse : 분석한다.

#### NPM(Node Package Manager)
- uglifyjs : 기계가 코드를 처리하는 데 필요한 필수적인 코드를 제외한 나머지 공백을 다 제거하는 단계의 코드를 만들어줌
    - uglifyjs -m : 지역변수와 같이 바꿔도 상관없는 것까지 한글자의 가장 짧은 것들로 바꿔 줌
    - uglifyjs pretty.js -o pretty.min.js -m
    pretty.min.j에 그 상태로 저장된다.
- 다른 사람의 모듈 사용하기
    - npm init (description만 사용하기) --> package.json이 생성

#### URL 
<img src = "img\URL.png"  alt = "2">

- URL를 이용해서 client에게 서로 다른 페이지를 만들어서 보여준다.
    - protocol : 사용자가 서버에 접속할 떄 어떠한 방식으로 통신할 것인지
    - host : 인터넷에 접속되어있는 각각의 컴퓨터
    - port : 한대에 컴퓨터 안에 여러개의 서버가 존재하는데 이것을 구분시켜 주는 것 
    - path : 컴퓨터 안에 있는 어느 directiory의 어떤 파일인지를 가리 킴
    - query string : 이것을 변경하면 내가 읽고 싶은 정보를 웹서버에게 전달 가능
        - ?로 시작
        - 값과 값은 &를 이용
        - 값의 이름과 값은 =로 구분
    <img src = "img\query.png"  alt = "3">
    - 이와 같은 주소로 사용자가 웹 애플리케이션에 접속을 했을 떄 id에 값(query)이 무엇이냐에 따라 사용자에게 적당한 컨텐츠를 보여준다

#### CRUD(Create Read Updata Delete)
- 정보시스템 매커니즘으로 이 네가지가 정보를 다루는 핵심적인 키워드들이다.


#### 다음에 학습할 부분 (18부터 하기)
- https://www.youtube.com/watch?v=zPsRlbYKWhI&list=PLuHgQVnccGMA9QQX5wqj6ThK7t2tsGxjm&index=23
-> https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%98%81%ED%99%94%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0#
'따라하며 배우는 노드, 리액트 시리즈 - 영화 사이트 만들기' -> 보면서 더 익히기(이외에 챗봇 만들기 등도 있음)
#### 참고 사이트
- https://www.youtube.com/playlist?list=PLuHgQVnccGMA9QQX5wqj6ThK7t2tsGxjm
    보고 따라서 공부하기!!
- 
