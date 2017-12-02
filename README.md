 # angularStudy

## Angular Component - Interaction
[컴포넌트 간의 상태 공유](link)
- ng g c childComponentName (자식 컴포넌트)
- 자식 Directive의 select프로퍼티에 지정한 이름 'app-user-list' 
- 부모 컴포넌트에서 추가 할 수 있다.
- npm install bootstrap
- 경로 .angular-cli.json styles에 
- "../node_modules/bootstrap/dist/css/bootstrap.min.css", 추가.

[@Input 데코레이터](link)
- 부모 컴포넌트에서 자식 컴포넌트로 상태 전달
- form 요소를 가지고 있는 부모 컴포넌트의 경우, 사용자에 의해 상태(state)가 변경되면 자식 컴포넌트와 공유할 필요가 있다.
- 부모 컴포넌트는 프로퍼티 바인딩을 통해 자식 컴포넌트에게 상태 정보를 전달한다.
- ex) aa <app-user-list [users]="users"></app-user-list>

```
//property binding 
//state : myState
<child [state]="myState"></child>
@input() state:string;

// v1, v2, v3, v4
// node-sass

// social login
// login, search engine
// 여행자 찾기 위치 다음에 재능 갈 위치, 갈 위치, 

```

### Sass integration

#### step 1
-  when generating a new project
```
ng new sassy-project --style=sass
```
- angular-cli.json style.sass 로 기본 세팅이 되어있음.

-  or set the default style on an existing project
```
ng set defaults.styleExt scss
```
- .angular-cli.json defaults styleExt value 바뀜
```
"defaults": {
    "styleExt": "scss",
    "class": {
      "spec": false
    }
```
#### step 2
+ 기존 프로젝트 후에 sass를 설치 한 경우
  + style.css 를 style.scss 
  + angular-cli.json 아래와 같이 바꿔주기 
  ```
   "styles": [
        "styles.scss"
      ]
  ```

### step 3
+ noramalize.css , bootstrap custom 연결 방법
 + 기본 style.css 지우고 styles폴더 안에 main.scss
 ```
  "styles":[
      "styles/main.scss"
  ]
 ```
+ npm i -S bootstrap-sass
  ```
  @import "bootstrap_custom.scss";
  ```



