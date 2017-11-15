import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <div class="row">
    <form class="form-inline">
      <div class="form-group" style="margin: 30px 0">
        <label for="name">Name:</label>
        <input #name type="text" id="name" class="form-control" placeholder="이름을 입력하세요">
        <label for="role">Role:</label>
        <select #role id="role" class="form-control">
          <option>Administrator</option>
          <option>Developer</option>
          <option>Designer</option>
        </select>
        <button
          class="btn btn-default"
          (click)="addUser(name.value, role.value)">Add user
        </button>
      </div>
      <app-user-list [users]="users"></app-user-list>
    </form>
  </div>
</div>
  `,
  styles: []
})
export class AppComponent {
  // title = 'app';
  // array typescript 선언
  // let list2: number[] = [1, 2, 3];
  
  users: User[];

  constructor(){
    this.users = [
      new User(1, 'Lee', 'Administrator'),
      new User(2, 'Beak', 'Developer'),
      new User(3, 'Park', 'Designer')
    ];
  }

  addUser(name:string, role:string):void{
    if(name && role){
      this.users = [...this.users,{id:this.getNextId(), name, role}]
    }
  }

  getNextId(): number{
    return this.users.length ? Math.max(...this.users.map(({id})=>id)) + 1 : 1;
  }
}
