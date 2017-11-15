import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 
  <app-nav></app-nav>
  <app-banner></app-banner>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
