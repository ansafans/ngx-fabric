import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { NgFabricjsModule } from 'projects/ng-fabricjs/src/public_api';
import { NgFabricjsModule } from '../../dist/ng-fabricjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFabricjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
