import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
  <p>{{content}}</p>
  `,
  styles: [],
  //encapsulation: ViewEncapsulation.None
})
export class UserListComponent {

  content = 'user-list Works!'

}
