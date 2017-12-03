import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  template: `
   <form [formGroup]="userForm" novalidate>
      <div>
        <input type="text" formControlName="userid"
        placeholder="userid"/>
      </div>
      <div formGroupName="passwordGroup">
        <div>
          <input type="password" formControlName="password"
          placeholder="password"/>
        </div>
        <div>
          <input type="password" formControlName="confirmPassword"
          placeholder="confirm password"/>
        </div>
      </div>
   </form>
   <pre> {{ userForm.value | json }}</pre>
   <pre> {{ userForm.status }}</pre>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;

  ngOnInit() {
    this.userForm = new FormGroup({
      // formControls: new FormGroup({})
      userid: new FormControl(''),
      passwordGroup: new FormGroup({
        password: new FormControl(''),
        confirmPassword: new FormControl('')
      })
    });
    console.log(this.userForm);
  }
}
