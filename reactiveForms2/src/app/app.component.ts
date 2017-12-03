import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <!--
    FormArray 에 접근할 수 있도록 getter를 정의하였다.
    hobbies 프로퍼티에 접근해서 FormArray 타입 hobbies의 controls 프로퍼티를
    사용해 개별 요소에 접근한다.
  -->
   <form [formGroup]="userForm" novalidate>
      <div>
        <input type="text" formControlName="userid" placeholder="userid"/>
      </div>
      <div formGroupName="passwordGroup">
        <input type="password" formControlName="password" placeholder="password"/>
        <input type="password" formControlName="confirmPassword" placeholder="confirm password"/>
      </div>
   <!--FormArray 인스턴스를 DOM 요소에 바인딩한다.-->
      <div formArrayName="hobbies">
      <!--userForm.hobbies.controls-->
        <div *ngFor="let hobby of hobbiesi.controls; let i=index">
          <!--formControName=0-->
          <!--formControName=1-->
          <input type="text" [formControlName]="i" [value]="hobby.status"/>
        </div>
      </div>
   </form>
   <pre>{{ userForm.value | json }}</pre>
   <pre>{{ userForm.status }}</pre>
   <pre>{{ userForm.controls }}</pre>
  `
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  ngOnInit() {
    this.userForm = new FormGroup({
      userid : new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-zA-Z0-9]{4,10}/)
      ]),
      passwordGroup: new FormGroup({
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      }),
      hobbies: new FormArray([
        new FormControl(''),
        new FormControl('')
      ])
    });
    console.log(this.userForm);
  }
  /*
    ngOnInit() {
    this.userForm = new FormGroup({
      hobbies: new FormArray([
        new FormControl(''),
        new FormControl('')
      ])
    });
    console.log(this.userForm);
  }
  */

  // 템플릿에서 폼 모델에 접근할 수 있도록
  // 컴포넌트 클래스에 getter를 정의한다.
  // getter 멤버변수에 접근할때마다 멤버변수가 값을 조작하는 행위가 필요할때
  get hobbiesi(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }
}
