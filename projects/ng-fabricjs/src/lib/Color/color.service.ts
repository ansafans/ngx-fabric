import { Injectable } from '@angular/core';
import 'fabric';
declare const fabric: any;

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  public color:any;

  constructor() { }

  init(color:string){
    this.color=new fabric.Color(color);
  }

  fromHex(color:string){
    return this.color.fromHex(color);
  }

  fromHsl(color:string){
    return this.color.fromHsl(color);
  }

  fromHsla(color:string){
    return this.color.fromHsla(color);
  }

  fromRgba(color:string){
    return this.color.fromRgba(color);
  }

  fromSource(source:any[]){
    return this.color.fromSource(source);
  }

  sourceFromHex(color:string){
    return this.color.sourceFromHex(color);
  }

  sourceFromHsl(color:string){
    return this.color.sourceFromHsl(color);
  }

  sourceFromRgb(color:string){
    return this.color.sourceFromRgb(color);
  }

  getAlpha(){
    return this.color.getAlpha();
  }

  getSource(){
    return this.color.getSource();
  }

  overlayWith(otherColor:string){
    return this.color.overlayWith(otherColor);
  }

  setAlpha(alpha:number){
    return this.color.setAlpha(alpha);
  }

  setSource(source:any[]){
    return this.color.setSource(source);
  }

  toBlackWhite(threshold:number){
    return this.color.toBlackWhite(threshold);
  }

  toGrayscale(){
    return this.color.toGrayscale();
  }

  toHex(){
    return this.color.toHex();
  }

  toHexa(){
    return this.color.toHexa();
  }

  toHsl(){
    return this.color.toHsl();
  }

  toHsla(){
    return this.color.toHsla();
  }

  toRgb(){
    return this.color.toRgb();
  }

  toRgba(){
    return this.color.toRgba();
  }
}
