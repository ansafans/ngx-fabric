import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFabricModule } from 'projects/ngx-fabric/src/public_api';
// import { NgxFabricModule } from '../../dist/ngx-fabric';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFabricModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
