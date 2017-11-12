import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component'

@Component({
  selector: 'app-root',
  template: `      
        <h1>{{'Page Header ' + pageHeader}}</h1>
        <img src='{{imgPath}}'/>
        <img [src]='imgPath'/>
        <img src='https://www.google.co.kr/images/branding/googlelogo/2x/{{logo}}'/>
        <p>{{testIf ? testIf :'false'}}</p>
        <p>{{getFullName()}}</p>
        <button [disabled]='isDisabled'>click me</button>
        <button disabled='{{isDisabled}}'>click me</button>
        <span bind-innerHtml='pageHeader'></span>
        <span [innerHtml]='pageHeader'></span>
        <div>{{badHtml}}</div>
        <div [innerHtml]='badHtml'></div>
        <div><input id='inputId' type='text' value='Tom'/></div>
        <my-employee><my-employee>
  `,
  styles: []
})
export class AppComponent {
  //name:string = 'app';
  //hi:string="hihi";
  pageHeader: string = "Employee details";
  testIf: string = null;
  badHtml: string = 'Hello <script>alert("hacked");</script> world'
 /* testIf: string = 'ddd';*/
  imgPath: string = 'https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  logo: string = 'googlelogo_color_272x92dp.png'
  firstName: string = 'top';
  lastName: string = 'hok';
  isDisabled: boolean = true;
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  //inputId.getAttribute('value') Tom
  //inputId.value Tom
  //inputId.value Mary
}
