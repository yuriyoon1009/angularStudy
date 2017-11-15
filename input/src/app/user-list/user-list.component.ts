import { Component, Input } from '@angular/core';
import { User } from '../models/user.model';
@Component({
  selector: 'app-user-list',
  template: `
  <table class="table">
  <thead>
    <tr>
      <th>No.</th>
      <th>ID</th>
      <th>Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let user of users; let i=index">
      <td>{{ i }}</td>
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.role }}</td>
      <button
      class="btn btn-danger btn-sm"
      (click)="remove.emit(user)">
      <span class="glyphicon glyphicon-remove">X</span>
    </button>
    </tr>
  </tbody>
</table>
<div class="panel panel-default">
<div class="panel-body">
  <p>Admin: {{ cntAdmin }}</p>
  <p>Developer: {{ cntDeveloper }}</p>
  <p>Designer: {{ cntDesigner }}</p>
</div>
</div>
  `
})
export class UserListComponent  {
  // <app-users-list [users]="users"></app-user-list>
  // <app-users-list [자식컴포넌트]="부모컴포넌트클래스 프로퍼티"></app-user-list>
  //@Input() 자식 컴포넌트 클래스 프로퍼티
  //@Input() users: User[];

  // _users는 내부에서만 사용할 private 프로퍼티이다.
  
  private _users:User[];

  cntAdmin: number;
  cntDeveloper: number;
  cntDesigner: number;
  
  //setter, getter

  @Input()
  set users(users: User[]) {
    if (!users) { return; }

    this.cntAdmin
      = users.filter(({role}) => role === 'Administrator').length;
    this.cntDeveloper
      = users.filter(({role}) => role === 'Developer').length;
    this.cntDesigner
      = users.filter(({role}) => role === 'Designer').length;
    /* table */
    this._users = users;
    console.log(users);
  }

  get users(): User[] {
    return this._users;
  }

  /*
    get users(): User[] {
      return this._users;
    }
  */

  // UserListComponent.users

  
}
