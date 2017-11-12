## Angular Moduel
- 컴포넌트, 파이프 서비스같은 앵귤러 애플 주요 부분을 기능 단위로 그룹핑하게 해준다.
- 하나의 root module을 가진다.
- 여러 feature module을 가질 수 있다.
- 재사용할 수 있는 기능을 외부에 배포하기 위해 사용되기도 한다.

- ng generate module projectName
- ng g c todo/todos --module todo/todo.module.ts --export
- ng g component todo/todos --module todo/todo.module.ts --export

## Angular Component
- 빌딩 블록 (lego)
- HTML요소들의 그룹
- 뷰와 로직으로 구성
- 하나의 컴포넌트는 여러 컴포넌트를 가질 수 있고 한 컴포넌트에 그룹화 되어있다.
- ng g c todo/todos/todo -inline-template -inline-style (-it -is)

## Angular Template
- HTML 코드로서 템플릿을 표현
- Template 표현식과 Template 문장 가짐
- 바인딩의 대상 : 속성, 이벤트, ngModel, class, style

## Angular binding
- {{title}} 
- <todo [todo]="work">

## style
- styles in external stylesheet :styles.css
- specify the styles using the @component decorator styles property
- specify the styles using the @component decorator styleUrls property

## Interpolation
- one way data-biding : from component to view template
- one way data-biding : from view template to component
- two way data-binding : from component to view template && from view template to component

## Property binding
- property binding <img [src]='imagePath'> || interpolation <img src='{{imagePath}}'/>
- interpolation is a special syntax that angular converts into a propertu bidning
- to concatenate string we must use interpolation instead of property binding
- to set an element property to a non-string data value, you must use property binding

## Html attribute versus Dom property
- dom stands for document object.
- model. when a browser loads a web page, the brower creates a document object model of that page. (window, document, html, head, body, script, div, h1)
- Html attributes and the Dom properties are different things
- angular binding works with properties and events, and not attributes.
```
//disabled is dom property, and not attribute
<button [disabled]="isDisabled">click me</button>
<button disabled='{{isDisabled}}>clcick me</button>
```
