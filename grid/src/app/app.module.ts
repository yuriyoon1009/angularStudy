import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Browser } from 'selenium-webdriver';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
