## Form 
- 폼은 애플리케이션에서 사용자의 데이터를 입력을 받는 인터페이스를 의미한다. 폼은 폼 데이터의 유효성 검증을 한다. HTML 표준 폼으로도 데이터를 서버로 전송할수 있으며 유효성 검증도 가능하지만 애플리케이션 개발에 적용하기 어렵다. 
- Angular는 템플릿 기반 폼과 리액티브 폼을 제공한다.

## Template-driven forms
- 템플릿 기반 폼은 컴포넌트 템플릿에서 디렉티브를 사용하여 폼을 구성하는 방식으로 각 필드의 형식, 유효성 검증 규칙을 모두 템플릿에서 정의한다.

- 템플릿 기반 폼은 NgForm, NgModel, NgModelGroup4
```
@Component({
    sle
})
```
## NgModel
- NgModel 디렉티브는 자신이 적용된 폼 컨트롤 요소에 해당하는 FormControl 인스턴스를 생성한다. 
- 참조 변수에 ngModel을 할당하면 유효성 검증 상태 추적이 가능해진다.
- <input type="text" name="userid" ngModel #userid="ngModel">

## 유효성 검증 상태 프로퍼티
-  error, invalid, dirty, untouched, pristing.

## FormGroup 
```
<div formGroupName="passwordGroup">
</div>


<!--
<input [value]="'lee'">
<input value="lee">
property binding
name = 'Lee'
-->
```

### 사용자 정의 
- import {abstractControl} : 모든 폼 클래스의 부모 클래스 
- 