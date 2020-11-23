# typing-game
typing game

## webpack
webpack 을 이용해 public 에 빌드된 파일이 생기게 만들었고 webpack-dev-server 를 이용해 개발 환경을 구축했다.

## vanila javascript
typescript 환경을 세팅했다.

## routing
react router 의 모습을 많이 참고했다. app 에서 Router 에 Route 를 등록해 놓고 history 에 path 가 쌇일 때마다 그 path 와 일치하는 route 를 찾아서 해당하는 element object 를 root element 에 rendering 하는 방식으로 routing 을 구현했다.

## ui
react 처럼 declarative 한 ui 코드를 짜고 싶었다. 그러다가 그럼 가상 DOM 도 만들자 하다가 시간이 촉박해서 갈아 엎고 안드로이드 개발했을 당시를 떠올리면서 만들었다. 그래서 activity 에 대응하는 page 라는 클래스와 xml 에 대응하는 view 라는 클래스를 만들어서 상속받아서 그리게끔 하려고 했다. activity 에서 xml id 를 통해서 뷰에 연결하듯 page 에서 getelementbyid 로 연결했는데 이게 마음에 좀 들지 않았다. 어차피 동적으로 element 객체 만드는데 그것을 굳이 다시 찾아서 써야하나, 바로 가져다가 쓸 수 없을까 싶어서 지금의 형태가 됐다. page 의 state 와 attribute, style 을 빌드해서 하나의 element object 로 return 하는 함수로 만들었다.

## test
jest 를 사용해서 테스트를 진행했다. 시나리오를 생각해서 테스트 코드를 작성했다.