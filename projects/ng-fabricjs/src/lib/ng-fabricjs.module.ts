import { NgModule } from '@angular/core';
import { NgFabricjsComponent } from './ng-fabricjs.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CanvasService } from './Canvas/canvas.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgFabricjsComponent],
  exports: [NgFabricjsComponent]
})

export class NgFabricjsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgFabricjsModule,
      providers: []
    }
  }
}
