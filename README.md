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
- ex) <app-user-list [users]="users"></app-user-list>

```
//property binding 
//state : myState
<child [state]="myState"></child>
@input() state:string;
```
