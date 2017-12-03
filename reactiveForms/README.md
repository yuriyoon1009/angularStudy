### Reactiveforms versus templateforms

- 리액티브 폼은 템플릿이 아닌 컴포넌트 클래스에서 폼 모델을 구성하는 방식이다. 리액티브 폼은 템플릿 기반 폼보다 복잡한 경우 사용한다. 

- 템플릿 기반폼 : NgForm, NgModel, NgModelGroup 디렉티브는 폼 컨트롤 요소에 바인딩하여 값이나 유효성 검증 상태를 추적할 수 있었다. 

### Reactiveforms
- 컴포넌트 클래스에서 자바스크립트 객체인 폼 모델(FormGroup, FormControl, FormArray)을 생성한다. 그리고 form*접두사가 붙은 디렉티브(formGroup, formControl, formArray)을 사용하여 템플릿의 폼 요소와 폼 모델을 프로퍼티 바인딩으로 연결한다. 
- 데이터 모델과 폼 모델에 직접 접근하여 데이터 모델을 폼 모델에 반영하고 템플릿 폼 컨트롤 요소의 상태 변화를 관찰하고 변화에 대응한다. 
- @angular/forms 패키지의 ReactiveFormsModule을 애플리케이션 모듈에 추가한다.

### Reactive form의 중심 클래스와 디렉티브

#### FormGroup 클래스와 formGroup/formGroupName 디렉티브
+ FormGroup
  + FormGroup 인스터스는 자식인 formControl, formArray 인스턴스들을 그룹화하여 관리하기 위한 최상위 컨테이너이다 하나의 객체로 그룹화하여 자식 폼 모델 인스턴의 값과 유효성 상태를 관리한다.  
  + 템플릿 기반 폼에서 NgForm 디렉티브를 사용하여 자신이 적용된 폼 요소에 해당하는 FormGroup 인스턴스를 생성하였다.
  + 반면, 리액티브 폼에서는 컴포넌트 클래스에 FormGroup 인스턴스를 직접 생성하고 formGroup 디렉티브를 사용하여 FormGroup 인스턴스와 폼 요소를 바인딩한다. 
  + novalite 표준 HTML 유효성 검증을 방지한다. 리액티브 폼이 제공하는 유효성 검증기를 사용해서 novalidate 선언한다.

```
const myFormGroup = new FormGroup({
    // 자식 폼 모델 인스턴스
});
```
+ formGroupName 디렉티브
  + formGroup 인스턴스의 자식 FormGroup 인스턴스와 폼 컨트롤 요소 그룹을 바인딩한다.
  + formGroupName 디렉티브에는 문자열을 할당하여야 한다.

  ```
  <div [FormGroupName]="cellPhone"></div>
  ```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
