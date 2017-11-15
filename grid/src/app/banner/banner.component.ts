import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
  <ul class="bannerWrap">
    <mat-grid-list cols="12" rowHeight="100px">
      <mat-grid-tile colspan="3" rowspan="1">
        <li class="banner">banner1</li>
      </mat-grid-tile>
      <mat-grid-tile colspan="3" rowspan="1">
        <li class="banner">banner2</li>
      </mat-grid-tile>
      <mat-grid-tile colspan="3" rowspan="1">
        <li class="banner">banner3</li>
      </mat-grid-tile>
    </mat-grid-list>
  </ul>
  `,
  styles: [`
  .bannerWrap{padding-left:5%; width:95%; background:yellow}
  /*mat-grid-tile {
    background: lightblue;
  }*/
  /* cal(100px/2) */
  .banner{margin-right:5%; background:red; width:100%; height:50px;}
 
  `]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
