### FormArray 클래스 && formArrayName 디렉티브

#### FormArray
- FormArray 인스턴스는 자바스크립트의 배열과 유사하게 FormControl 인스턴스들을 그룹화하여 관리한다. 
- FormArray는 폼 컨트롤 요소가 동적으로 생성되어 그 갯수가 변화할 때 사용한다.

```
const myFormArray = new FormArray([
    new FormControl(''),
    new FormControl('')
]);
```
### formArrayName 
- formArrayName 디렉티브는 FormArray 인스턴스를 DOM 요소에 바인딩한다.

### Reactive 폼 유효성 검증
- required, pattern과 같은 빌트인 검증기를 선언한다.
- 하지만, 폼 컨트롤 요소에 빌트인 검증기를 선언하지 않고 컴포넌트 클래스 내부에서 생성한 FormControl에 추가한다.
- FormControl에 추가된 검증기는 템플릿의 폼 컨트롤 요소의 상태가 변화할때마다 호출된다.
- 리액티브 폼에서 사용 가능한 빌트인 검증기는 Validators 클래스에 정적 메소드로 정의되어 있다.

```
class Validators {
  static min(min: number): ValidatorFn
  static max(max: number): ValidatorFn
  static required(control: AbstractControl): ValidationErrors|null
  static requiredTrue(control: AbstractControl): ValidationErrors|null
  static email(control: AbstractControl): ValidationErrors|null
  static minLength(minLength: number): ValidatorFn
  static maxLength(maxLength: number): ValidatorFn
  static pattern(pattern: string|RegExp): ValidatorFn
  static nullValidator(c: AbstractControl): ValidationErrors|null
  static compose(validators: (ValidatorFn|null|undefined)[]|null): ValidatorFn|null
  static composeAsync(validators: (AsyncValidatorFn|null)[]): AsyncValidatorFn|null
}
```
### 사용자 정의 검증기 (Custom validator)
- Built in validator 기본적인 검증 기능을 제공하지만 복잡한 애플리에키션의 요구사항을 충조시키기 어려운 경우가 있다.
- Angular는 custom validator을 정의 할 수 있으며 템플릿 기반 폼과 리액티브 폼 모두에 사용할 수 있다. 
- custom validator 재사용을 위해 외부 클래스로 분리하는 것이 일반적이다.

