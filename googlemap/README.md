### Setting up Angular Google maps

#### Step 1 : Install Angular Google Maps
```
npm intsall @agm/core --save
```

#### Step 2 : set up agm/core in app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```
#### Step 3 : get api key
- get api key on google map
https://developers.google.com/maps/documentation/javascript/get-api-key

#### Map Functions & Event

#### Map add, marker form, function

References
install 
https://angular-maps.com/guides/getting-started/
api key
https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
https://stackoverflow.com/questions/46843606/how-to-make-custom-arrow-mark-in-agm-map