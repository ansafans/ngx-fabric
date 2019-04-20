import { Injectable } from '@angular/core';
import 'fabric';
import { ImageInterface, DataURLOptions } from './image.interface';
import { CanvasService } from '../Canvas/canvas.service';
declare const fabric: any;

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public image:any;

  constructor(private canvas:CanvasService) {}

  init(element:string, optionsopt?:any, callbackopt?:Function){
    this.image=new fabric.Image(element,optionsopt,callbackopt);
  }

  setOptions(options:ImageInterface){
    this.image.__corner=options.__corner;
    this.image._filterScalingX=options._filterScalingX;
    this.image._filterScalingY=options._filterScalingY;
    this.image._lastScaleX=options._lastScaleX;
    this.image._lastScaleY=options._lastScaleY;
    this.image.absolutePositioned=options.absolutePositioned;
    this.image.angle=options.angle;
    this.image.backgroundColor=options.backgroundColor;
    this.image.borderColor=options.borderColor;
    this.image.borderDashArray=options.borderDashArray;
    this.image.borderOpacityWhenMoving=options.borderOpacityWhenMoving;
    this.image.borderScaleFactor=options.borderScaleFactor;
    this.image.cacheKey=options.cacheKey;
    this.image.cacheProperties=options.cacheProperties;
    this.image.centeredRotation=options.centeredRotation;
    this.image.centeredScaling=options.centeredScaling;
    this.image.clipTo=options.clipTo;
    this.image.cornerColor=options.cornerColor;
    this.image.cornerDashArray=options.cornerDashArray;
    this.image.cornerSize=options.cornerSize;
    this.image.cornerStrokeColor=options.cornerStrokeColor;
    this.image.cornerStyle=options.cornerStyle;
    this.image.cropX=options.cropX;
    this.image.cropY=options.cropY;
    this.image.crossOrigin=options.crossOrigin;
    this.image.dirty=options.dirty;
    this.image.evented=options.evented;
    this.image.excludeFromExport=options.excludeFromExport;
    this.image.fill=options.fill;
    this.image.fillRule=options.fillRule;
    this.image.flipX=options.flipX;
    this.image.flipY=options.flipY;
    this.image.globalCompositeOperation=options.globalCompositeOperation;
    this.image.hasBorders=options.hasBorders;
    this.image.hasControls=options.hasControls;
    this.image.hasRotatingPoint=options.hasRotatingPoint;
    this.image.height=options.height;
    this.image.hoverCursor=options.hoverCursor;
    this.image.includeDefaultValues=options.includeDefaultValues;
    this.image.inverted=options.inverted;
    this.image.left=options.left;
    this.image.lockMovementX=options.lockMovementX;
    this.image.lockMovementY=options.lockMovementY;
    this.image.lockRotation=options.lockRotation;
    this.image.lockScalingFlip=options.lockScalingFlip;
    this.image.lockScalingX=options.lockScalingX;
    this.image.lockScalingY=options.lockScalingY;
    this.image.lockSkewingX=options.lockSkewingX;
    this.image.lockSkewingY=options.lockSkewingY;
    this.image.lockUniScaling=options.lockUniScaling;
    this.image.minimumScaleTrigger=options.minimumScaleTrigger;
    this.image.minScaleLimit=options.minScaleLimit;
    this.image.moveCursor=options.moveCursor;
    this.image.noScaleCache=options.noScaleCache;
    this.image.objectCaching=options.objectCaching;
    this.image.opacity=options.opacity;
    this.image.originX=options.originX;
    this.image.originY=options.originY;
    this.image.padding=options.padding;
    this.image.paintFirst=options.paintFirst;
    this.image.perPixelTargetFind=options.perPixelTargetFind;
    this.image.rotatingPointOffset=options.rotatingPointOffset;
    this.image.scaleX=options.scaleX;
    this.image.scaleY=options.scaleY;
    this.image.selectable=options.selectable;
    this.image.selectionBackgroundColor=options.selectionBackgroundColor;
    this.image.skewX=options.skewX;
    this.image.skewY=options.skewY;
    this.image.statefullCache=options.statefullCache;
    this.image.stateProperties=options.stateProperties;
    this.image.stroke=options.stroke;
    this.image.strokeDashArray=options.strokeDashArray;
    this.image.strokeDashOffset=options.strokeDashOffset;
    this.image.strokeLineCap=options.strokeLineCap;
    this.image.strokeLineJoin=options.strokeLineJoin;
    this.image.strokeMiterLimit=options.strokeMiterLimit;
    this.image.strokeWidth=options.strokeWidth;
    this.image.top=options.top;
    this.image.transformMatrix=options.transformMatrix;
    this.image.transparentCorners=options.transparentCorners;
    this.image.type=options.type;
    this.image.visible=options.visible;
    this.image.width=options.width;
  }

  fromElement(element:any, optionsopt?:any, callback?:Function){
    this.image=new fabric.Image.fromElement(element, optionsopt, callback);
    return this.image;
  }

  fromObject(object:any, callback:Function){
    this.image=new fabric.Image.fromObject(object, callback);
    return this.image;
  }

  fromURL(url:string, callbackopt?:Function, imgOptionsopt?:any){
    this.image = new fabric.Image.fromURL(url, callbackopt, imgOptionsopt)
    return this.image;
  }

  _calcRotateMatrix(){
    return this.image._calcRotateMatrix();
  }

  _calcTranslateMatrix(){
    return this.image._calcTranslateMatrix();
  }

  _limitCacheSize(dims){
    return this.image._limitCacheSize(dims);
  }

  _needsResize(){
    return this.image._needsResize()
  }

  _removeCacheCanvas(){
    return this.image._removeCacheCanvas();
  }

  _renderControls(ctx:any, styleOverrideopt:any){
    return this.image._renderControls(ctx, styleOverrideopt);
  }

  _setupCompositeOperation(ctx){
    return this.image._setupCompositeOperation(ctx);
  }

  _toSVG(){
    return this.image._toSVG();
  }

  adjustPosition(to:string){
    return this.image.adjustPosition(to);
  }

  animate(property:string | any, value:number | any){
    return this.image.animate(property, value);
  }

  bringForward(intersectingopt:boolean){
    return this.image.bringForward(intersectingopt);
  }

  bringToFront(){
    return this.image.bringToFront();
  }

  calcCoords(){
    return this.image.calcCoords();
  }

  calcTransformMatrix(skipGroupopt:boolean){
    return this.image.calcTransformMatrix(skipGroupopt);
  }

  center(){
    return this.image.center();
  }

  centerH(){
    return this.image.centerH();
  }

  centerV(){
    return this.image.centerV();
  }

  clone(callback:Function, propertiesToIncludeopt?:any[]){
    return this.image.clone(callback, propertiesToIncludeopt);
  }

  cloneAsImage(callback:Function, optionsopt?:any){
    return this.image.cloneAsImage(callback, optionsopt);
  }

  complexity(){
    return this.image.complexity();
  }

  containsPoint(point:any, linesopt?:any, absoluteopt?:boolean, calculateopt?:boolean){
    return this.image.containsPoint(point, linesopt, absoluteopt, calculateopt);
  }

  dispose(){
    return this.image.dispose();
  }

  drawBorders(ctx, styleOverride){
    return this.image.drawBorders(ctx, styleOverride);
  }

  drawBordersInGroup(ctx, options, styleOverride){
    return this.image.drawBordersInGroup(ctx, options, styleOverride);
  }

  drawCacheOnCanvas(ctx){
    return this.image.drawCacheOnCanvas(ctx);
  }

  drawClipPathOnCache(ctx){
    return this.image.drawClipPathOnCache(ctx);
  }

  drawControls(ctx, styleOverride){
    return this.image.drawControls(ctx, styleOverride);
  }

  drawObject(ctx){
    return this.image.drawObject(ctx);
  }

  drawSelectionBackground(ctx:any){
    return this.image.drawSelectionBackground(ctx);
  }

  fxStraighten(callbacks:any){
    return this.image.fxStraighten(callbacks);
  }

  getBoundingRect(absoluteopt?:boolean, calculateopt?:boolean){
    return this.image.getBoundingRect(absoluteopt, calculateopt);
  }

  getCenterPoint(){
    return this.image.getCenterPoint();
  }

  getCoords(){
    return this.image.getCoords();
  }

  getElement(){
    return this.image.getElement();
  }

  getLocalPointer(e:any, pointeropt?:any){
    return this.image.getLocalPointer(e, pointeropt);
  }

  getObjectOpacity():number{
    return this.image.getObjectOpacity();
  }

  getObjectScaling(){
    return this.image.getObjectScaling();
  }

  getOriginalSize(){
    return this.image.getOriginalSize();
  }

  getPointByOrigin(originX:string, originY:string){
    return this.image.getPointByOrigin(originX, originY);
  }

  getScaledHeight(){
    return this.image.getScaledHeight();
  }

  getScaledWidth(){
    return this.image.getScaledWidth();
  }

  getSrc(filtered:boolean){
    return this.image.getSrc(filtered);
  }

  getSvgCommons(){
    return this.image.getSvgCommons();
  }

  getSvgFilter(){
    return this.image.getSvgFilter();
  }

  getSvgSpanStyles(style:any, useWhiteSpace:boolean){
    return this.image.getSvgSpanStyles(style, useWhiteSpace);
  }

  getSvgStyles(skipShadow:boolean){
    return this.image.getSvgStyles(skipShadow);
  }

  getSvgTextDecoration(style:any){
    return this.image.getSvgTextDecoration(style);
  }

  getSvgTransform(use:boolean){
    return this.image.getSvgTransform(use);
  }

  getSvgTransformMatrix(){
    return this.image.getSvgTransformMatrix();
  }

  getTotalObjectScaling(){
    return this.image.getTotalObjectScaling();
  }

  getViewportTransform(){
    return this.image.getViewportTransform();
  }

  hasCrop(){
    return this.image.hasCrop();
  }

  hasStateChanged(propertySetopt?:string){
    return this.image.hasStateChanged(propertySetopt);
  }

  intersectsWithObject(other:any, absoluteopt?:boolean, calculateopt?:boolean){
    return this.image.intersectsWithObject(other, absoluteopt, calculateopt);
  }

  intersectsWithRect(pointTL:any, pointBR:any, absoluteopt?:boolean, calculateopt?:boolean){
    return this.image.intersectsWithRect(pointTL, pointBR, absoluteopt, calculateopt);
  }

  isCacheDirty(skipCanvas:boolean){
    return this.image.isCacheDirty(skipCanvas);
  }

  isContainedWithinObject(other:any, absoluteopt?:boolean, calculateopt?:boolean){
    return this.image.isContainedWithinObject(other, absoluteopt, calculateopt);
  }

  isContainedWithinRect(pointTL:any, pointBR:any, absoluteopt?:boolean, calculateopt?:boolean){
    return this.image.isContainedWithinRect(pointTL, pointBR, absoluteopt, calculateopt);
  }

  isControlVisible(controlName:string){
    return this.image.isControlVisible(controlName);
  }

  isOnScreen(calculateopt?:boolean){
    return this.image.isOnScreen(calculateopt);
  }

  isPartiallyOnScreen(calculateopt?:boolean){
    return this.image.isPartiallyOnScreen(calculateopt);
  }

  isType(type:string){
    return this.image.isType(type);
  }

  moveTo(index:number){
    return this.image.moveTo(index);
  }

  needsItsOwnCache(){
    return this.image.needsItsOwnCache();
  }

  onDeselect(optionsopt?:any){
    return this.image.onDeselect(optionsopt);
  }

  onSelect(optionsopt?:any){
    return this.image.onSelect(optionsopt);
  }

  removeTexture(){
    return this.image.removeTexture();
  }

  render(ctx){
    return this.render(ctx);
  }

  rotate(angle:number){
    return this.image.rotate(angle);
  }

  saveState(optionsopt?:any){
    return this.image.saveState(optionsopt);
  }

  scale(value:number){
    return this.image.scale(value);
  }

  scaleToHeight(value:number, absolute:boolean){
    return this.image.scaleToHeight(value, absolute);
  }

  scaleToWidth(value:number, absolute:boolean){
    return this.image.scaleToWidth(value, absolute);
  }

  sendBackwards(intersectingopt:boolean){
    return this.image.sendBackwards(intersectingopt);
  }

  sendToBack(){
    return this.image.sendToBack();
  }

  setColor(color:string){
    return this.image.setColor(color);
  }

  setControlsVisibility(optionsopt?:any){
    return this.image.setControlsVisibility(optionsopt);
  }

  setControlVisible(controlName:string, visible:boolean){
    return this.image.setControlVisible(controlName, visible);
  }

  setCoords(ignoreZoomopt?:boolean, skipAbsoluteopt?:boolean){
    return this.image.setCoords(ignoreZoomopt, skipAbsoluteopt);
  }

  setCrossOrigin(){
    return this.image.setCrossOrigin();
  }

  setElement(element:any, optionsopt?:any){
    return this.image.setElement(element, optionsopt);
  }

  setGradient(property:string, optionsopt?:any){
    return this.image.setGradient(property, optionsopt);
  }

  setOnGroup(){
    return this.image.setOnGroup();
  }

  // setOptions(optionsopt?:any){
  //   return this.image.setOptions(optionsopt);
  // }

  setPatternFill(options:any, callbackopt?:Function){
    return this.image.setPatternFill(options, callbackopt)
  }

  setPositionByOrigin(pos:any, originX:string, originY:string){
    return this.image.setPositionByOrigin(pos, originX, originY);
  }

  setShadow(optionsopt:any | string){
    return this.image.setShadow(optionsopt);
  }

  setSrc(src:string, callbackopt?:Function, optionsopt?:any){
    return this.image.setSrc(src, callbackopt, optionsopt);
  }

  setupState(optionsopt?:any){
    return this.image.setupState(optionsopt);
  }

  shouldCache(){
    return this.image.shouldCache();
  }

  straighten(){
    return this.image.straighten();
  }

  toClipPathSVG(reviveropt?:Function){
    return this.image.toClipPathSVG(reviveropt);
  }

  toDatalessObject(propertiesToIncludeopt?:any[]){
    return this.image.toDatalessObject(propertiesToIncludeopt)
  }

  toDataURL(options:DataURLOptions){
    return this.image.toDataURL(options);
  }

  toJSON(propertiesToIncludeopt?:any[]){
    return this.image.toJSON(propertiesToIncludeopt);
  }

  toLocalPoint(point:any, originX:string, originY:string){
    return this.image.toLocalPoint(point, originX, originY);
  }

  toObject(propertiesToIncludeopt?:any[]){
    return this.image.toObject(propertiesToIncludeopt);
  }

  toString(){
    return this.image.toString();
  }

  toSVG(reviveropt?:Function){
    return this.image.toSVG(reviveropt);
  }

  transform(ctx:any){
    return this.image.transform(ctx);
  }

  translateToCenterPoint(point:any, originX:string, originY:string){
    return this.image.translateToCenterPoint(point, originX, originY);
  }

  translateToGivenOrigin(point:any, fromOriginX:string, fromOriginY:string, toOriginX:string, toOriginY:string){
    return this.image.translateToGivenOrigin(point, fromOriginX, fromOriginY, toOriginX, toOriginY);
  }

  translateToOriginPoint(center:any, originX:string, originY:string){
    return this.image.translateToOriginPoint(center, originX, originY);
  }

  viewportCenter(){
    return this.image.viewportCenter();
  }

  viewportCenterH(){
    return this.image.viewportCenterH();
  }

  viewportCenterV(){
    return this.image.viewportCenterV();
  }

  willDrawShadow(){
    return this.image.willDrawShadow();
  }

  // Customized methods
  addImageWithUrl(url:string,canvasId:string){
    let canvas = this.canvas.useCanvas(canvasId);
    
    this.fromURL(url,function(img){
      canvas.add(img);
    });
  }

  addImageWithUrls(urls:any[],canvasId:string){
    let canvas = this.canvas.useCanvas(canvasId);
    let ins = this;
    
    if(urls!=undefined && urls!=[]){
      urls.forEach(url => {
        ins.fromURL(url,function(img){
          canvas.add(img);
        });
      });
    }
  }
}
