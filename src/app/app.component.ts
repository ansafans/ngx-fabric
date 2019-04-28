import { Component } from '@angular/core';
import { CanvasService } from 'projects/ng-fabricjs/src/lib/Canvas/canvas.service';
import { ImageService } from 'projects/ng-fabricjs/src/lib/Image/image.service';
import { ItextService } from 'projects/ng-fabricjs/src/lib/IText/itext.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-fabricjs-module';

  public canvasEl;
  public canvasEl1;
  public imageEl;
  constructor(
    private canvas:CanvasService,
    private image:ImageService,
    private itext:ItextService
  ){
    this.canvasEl=this.canvas;
    this.imageEl=this.image;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.canvasEl = this.canvas.init('canvas');
    this.canvasEl1 = this.canvas.init('canvas1');
  
    this.canvasEl.setDimensions({
      width:1000,
      height:500
    })

    this.canvasEl1.setDimensions({
      width:800,
      height:400
    });
  }

  addImages(){
    let imgURLs = [
      'http://i.imgur.com/8rmMZI3.jpg',
      'https://cdn2.vectorstock.com/i/1000x1000/72/26/special-offer-label-red-sale-sticker-price-tag-vector-1827226.jpg'
    ];

    let canvas=this.canvasEl;
    let canvas1=this.canvasEl1;
    let image=this.imageEl;

    // imgURLs.forEach(function(url){
    //   image.fromURL(url,function(img){
    //     canvas.add(img);
    //   });
    // })

    // let img = image.fromURL(imgURLs[0],function(img){
    //   return img;
    // })

    // let img1 = image.fromURL(imgURLs[1],function(img){
    //   return img;
    // })

    this.image.addImageWithUrl(imgURLs[0],'canvas');
    this.image.addImageWithUrl(imgURLs[1],'canvas1');
    // canvas.add(img);

  }

  addText(){
    // this.itext.init("Hello World","canvas");
    // this.itext.init("Hello World","canvas1");
    let text:ItextService= this.itext.init("Hello World","canvas");
    text.setColor('red');
    text.setColor('blue');
  }

  getActive(){
    console.log(this.canvasEl.getActiveObject());
  }
}
