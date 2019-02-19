import { Injectable } from '@angular/core';
import 'fabric';
import { ImageInterface } from './image.interface';
declare const fabric: any;

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public image:any;

  constructor() {}

  init(element:string, optionsopt?:any, callbackopt?:Function){
    this.image=new fabric.Image(element,optionsopt,callbackopt);
  }

  setOptions(options:ImageInterface){
    
  }
}
