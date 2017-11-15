import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
<nav>
<mat-grid-list cols="12" rowHeight="100px">
    <mat-grid-tile colspan="12" rowspan="1">
      <h1 class="logo">logo</h1>  
      <ul>
        <li>호스팅</li>
        <li>도움말</li>
        <li>회원가입</li>
        <li>로그인</li>
      </ul>
    </mat-grid-tile>
    
 </mat-grid-list>
</nav>`,
  styles: [`
  
  mat-grid-tile {
    background: lightblue;
  }
  .logo{position:absolute; left:10%; top:0; background:pink; height:100%; line-height:100px;}
  
  ul{width:30%; list-style:none; position:absolute; right:10%; height:200px;}
  ul:after{display:block; content:""; clear:both; }
  li{width:25%; height:100%; line-height:100px;  float:left; background:green; text-align:center;}
  `]
})
export class NavComponent implements OnInit {
 // npm install -save @angular/material @angular/cdk
  constructor() { }

  ngOnInit() {
  }

}
