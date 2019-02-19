import { Component } from '@angular/core';
import { CanvasService } from 'projects/ng-fabricjs/src/lib/Canvas/canvas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-fabricjs-module';

  public canvasEl;
  constructor(private canvas:CanvasService){}

  ngOnInit(): void {
    this.canvasEl=this.canvas.init('canvas'); 
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.canvas.setHeight(500);
    console.log(this.canvas.getHeight());
  }
}
