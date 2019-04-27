import { Injectable } from '@angular/core';
import { ITextDimensions, ITextCloneImageOpts } from './itext.interface';
import 'fabric';
declare const fabric: any;

@Injectable({
  providedIn: 'root'
})
export class ItextService {

  private itext:any;

  constructor() { }

  init(text:string,optionsopt?:any){
    this.itext = new fabric.IText(text, optionsopt);
  }

  fromObject(object:any, callbackopt:Function){
    return this.itext.fromObject(object, callbackopt);
  }

  _calcRotateMatrix():any{
    return this.itext._calcRotateMatrix();
  }

  _calcTranslateMatrix(){
    return this.itext._calcTranslateMatrix();
  }

  _getFontDeclaration(styleObjectopt?:any):string{
    return this.itext._getFontDeclaration(styleObjectopt);
  }

  _getSelectionForOffset(e:Event, isRight:boolean):number{
    return this.itext._getSelectionForOffset(e, isRight);
  }

  _getStyleDeclaration(lineIndex:number, charIndex:number){
    return this.itext._getStyleDeclaration(lineIndex, charIndex);
  }

  _limitCacheSize(dims:ITextDimensions){
    return this.itext._limitCacheSize(dims);
  }

  _measureLine(lineIndex:number){
    return this.itext._measureLine(lineIndex);
  }

  _mouseDownHandler(){
    return this.itext._mouseDownHandler();
  }

  _mouseDownHandlerBefore(){
    return this.itext._mouseDownHandlerBefore();
  }

  _moveCursorLeftOrRight(direction:string, e:Event){
    return this.itext._moveCursorLeftOrRight(direction, e);
  }

  _moveCursorUpOrDown(direction:string, e:Event){
    return this.itext._moveCursorUpOrDown(direction, e);
  }

  _removeCacheCanvas(){
    return this.itext._removeCacheCanvas();
  }

  _renderControls(ctx:any, styleOverrideopt?:any){
    return this.itext._renderControls(ctx, styleOverrideopt);
  }

  _setupCompositeOperation(ctx:any){
    return this.itext._setupCompositeOperation(ctx);
  }

  _splitTextIntoLines(text):any{
    return this.itext._splitTextIntoLines(text);
  }

  abortCursorAnimation(){
    return this.itext.abortCursorAnimation();
  }

  adjustPosition(to:string){
    return this.itext.adjustPosition(to);
  }

  animate(property:any, value:any){
    return this.itext.animate(property, value);
  }

  bringForward(intersectingopt?:boolean){
    return this.itext.bringForward(intersectingopt);
  }

  bringToFront(){
    return this.itext.bringToFront();
  }

  calcCoords(){
    return this.itext.calcCoords();
  }

  calcTextHeight(){
    return this.itext.calcTextHeight();
  }

  calcTransformMatrix(skipGroupopt?:boolean){
    return this.itext.calcTransformMatrix(skipGroupopt);
  }

  center(){
    return this.itext.center();
  }

  centerH(){
    return this.itext.centerH();
  }

  centerV(){
    return this.itext.centerV();
  }

  cleanStyle(property:string){
    return this.itext.cleanStyle(property);
  }

  clearContextTop(){
    return this.itext.clearContextTop();
  }

  clone(callback:Function, propertiesToIncludeopt?:any){
    return this.itext.clone(callback, propertiesToIncludeopt);
  }

  cloneAsImage(callback:Function, optionsopt?:ITextCloneImageOpts){
    return this.itext.cloneAsImage(callback, optionsopt);
  }

  complexity():number{
    return this.itext.complexity();
  }

  containsPoint(point:any, linesopt?:any, absoluteopt?:boolean, calculateopt?:boolean):boolean{
    return this.itext.containsPoint(point, linesopt, absoluteopt, calculateopt);
  }

  copy(e:Event){
    return this.itext.copy(e);
  }

  drawBorders(ctx:any, styleOverride:any){
    return this.itext.drawBorders(ctx, styleOverride);
  }

  drawBordersInGroup(ctx:any, options:any, styleOverride:any){
    return this.itext.drawBordersInGroup(ctx, options, styleOverride);
  }

  drawCacheOnCanvas(ctx:any){
    return this.itext.drawCacheOnCanvas(ctx);
  }

  drawClipPathOnCache(ctx:any){
    return this.itext.drawClipPathOnCache(ctx);
  }

  drawControls(ctx:any, styleOverride:any){
    return this.itext.drawControls(ctx, styleOverride);
  }

  drawObject(ctx:any){
    return this.itext.drawObject(ctx);
  }

  drawSelectionBackground(ctx:any){
    return this.itext.drawSelectionBackground(ctx);
  }

  enlargeSpaces(){
    return this.itext.enlargeSpaces();
  }

  enterEditing(){
    return this.itext.enterEditing();
  }

  exitEditing(){
    return this.itext.exitEditing();
  }

  findLineBoundaryLeft(startFrom:number){
    return this.itext.findLineBoundaryLeft(startFrom);
  }

  findLineBoundaryRight(startFrom:number){
    return this.itext.findLineBoundaryRight(startFrom);
  }

  findWordBoundaryLeft(startFrom:number){
    return this.itext.findWordBoundaryLeft(startFrom);
  }

  findWordBoundaryRight(startFrom:number){
    return this.itext.findWordBoundaryRight(startFrom);
  }

  fromGraphemeToStringSelection(){
    return this.itext.fromGraphemeToStringSelection();
  }

  fromStringToGraphemeSelection(){
    return this.itext.fromStringToGraphemeSelection();
  }

  fxStraighten(callbacks:any){
    return this.itext.fxStraighten(callbacks);
  }

  get2DCursorLocation(selectionStartopt?:number, skipWrappingopt?:boolean){
    return this.itext.get2DCursorLocation(selectionStartopt, skipWrappingopt);
  }

  getBoundingRect(absoluteopt?:boolean, calculateopt?:boolean){
    return this.itext.getBoundingRect(absoluteopt, calculateopt);
  }

  getCenterPoint(){
    return this.itext.getCenterPoint();
  }

  getCompleteStyleDeclaration(lineIndex:number, charIndex:number){
    return this.itext.getCompleteStyleDeclaration(lineIndex, charIndex);
  }

  getCoords(){
    return this.itext.getCoords();
  }

  getCurrentCharColor(){
    return this.itext.getCurrentCharColor();
  }

  getCurrentCharFontSize(){
    return this.itext.getCurrentCharFontSize();
  }

  getDownCursorOffset(e:Event, isRight:boolean){
    return this.itext.getDownCursorOffset(e, isRight);
  }

  getHeightOfChar(line:number, char:number){
    return this.itext.getHeightOfChar(line, char);
  }

  getHeightOfLine(lineIndex:number){
    return this.itext.getHeightOfLine(lineIndex);
  }

  getLocalPointer(e:Event, pointeropt?:any){
    return this.itext.getLocalPointer(e, pointeropt);
  }

  getMeasuringContext(text:string, optionsopt?:any){
    return this.itext.getMeasuringContext(text, optionsopt);
  }

  getObjectOpacity(){
    return this.itext.getObjectOpacity();
  }

  getObjectScaling(){
    return this.itext.getObjectScaling();
  }

  getPointByOrigin(originX:string, originY:string){
    return this.itext.getPointByOrigin(originX, originY);
  }

  getScaledHeight(){
    return this.itext.getScaledHeight();
  }

  getScaledWidth(){
    return this.itext.getScaledWidth();
  }

  getSelectedText(){
    return this.itext.getSelectedText();
  }

  getSelectionStartFromPointer(e:Event){
    return this.itext.getSelectionStartFromPointer(e);
  }

  getSelectionStyles(startIndexopt?:number, endIndexopt?:number, completeopt?:boolean){
    return this.itext.getSelectionStyles(startIndexopt, endIndexopt, completeopt);
  }

  getSvgCommons(){
    return this.itext.getSvgCommons();
  }

  getSvgFilter(){
    return this.itext.getSvgFilter();
  }

  getSvgSpanStyles(style:any, useWhiteSpace:boolean){
    return this.itext.getSvgSpanStyles(style, useWhiteSpace);
  }

  getSvgStyles(skipShadow:boolean){
    return this.itext.getSvgStyles(skipShadow);
  }

  getSvgTextDecoration(style:any){
    return this.itext.getSvgTextDecoration(style);
  }

  getSvgTransform(use:boolean){
    return this.itext.getSvgTransform(use);
  }

  getSvgTransformMatrix(){
    return this.itext.getSvgTransformMatrix();
  }

  getTotalObjectScaling(){
    return this.itext.getTotalObjectScaling();
  }

  getUpCursorOffset(e:Event, isRight:boolean){
    return this.itext.getUpCursorOffset(e, isRight);
  }

  getValueOfPropertyAt(lineIndex:number, charIndex:number, property:string){
    return this.itext.getValueOfPropertyAt(lineIndex, charIndex, property);
  }

  getViewportTransform(){
    return this.itext.getViewportTransform();
  }

  hasStateChanged(propertySetopt?:string){
    return this.itext.hasStateChanged(propertySetopt);
  }

  initAddedHandler(){
    return this.itext.initAddedHandler();
  }

  initBehavior(){
    return this.itext.initBehavior();
  }

  initClicks(){
    return this.itext.initClicks();
  }

  initCursorSelectionHandlers(){
    return this.itext.initCursorSelectionHandlers();
  }

  initDelayedCursor(){
    return this.itext.initDelayedCursor();
  }

  initDoubleClickSimulation(){
    return this.itext.initDoubleClickSimulation();
  }

  initHiddenTextarea(){
    return this.itext.initHiddenTextarea();
  }

  initMousedownHandler(){
    return this.itext.initMousedownHandler();
  }

  initMouseMoveHandler(){
    return this.itext.initMouseMoveHandler();
  }

  initMouseupHandler(){
    return this.itext.initMouseupHandler();
  }

  insertChars(text:string, style:any, start:number, end:number){
    return this.itext.insertChars(text, style, start, end);
  }

  insertCharStyleObject(lineIndex:number, charIndex:number, quantity:number, copiedStyle:any){
    return this.itext.insertCharStyleObject(lineIndex, charIndex, quantity, copiedStyle);
  }

  insertNewlineStyleObject(lineIndex:number, charIndex:number, qty:number, copiedStyle:any){
    return this.itext.insertNewlineStyleObject(lineIndex, charIndex, qty, copiedStyle);
  }

  insertNewStyleBlock(insertedText:any, start:number, copiedStyleopt:any){
    return this.itext.insertNewStyleBlock(insertedText, start, copiedStyleopt);
  }

  intersectsWithObject(other:any, absoluteopt?:boolean, calculateopt?:boolean){
    return this.itext.intersectsWithObject(other, absoluteopt, calculateopt);
  }

  intersectsWithRect(pointTL:any, pointBR:any, absoluteopt?:boolean, calculateopt?:boolean){
    return this.itext.intersectsWithRect(pointTL, pointBR, absoluteopt, calculateopt);
  }

  isCacheDirty(skipCanvas:boolean){
    return this.itext.isCacheDirty(skipCanvas);
  }

  isContainedWithinObject(other:any, absoluteopt?:boolean, calculateopt?:boolean){
    return this.itext.isContainedWithinObject(other, absoluteopt, calculateopt);
  }

  isContainedWithinRect(pointTL:any, pointBR:any, absoluteopt?:boolean, calculateopt?:boolean){
    return this.itext.isContainedWithinRect(pointTL, pointBR, absoluteopt, calculateopt);
  }

  isControlVisible(controlName:string){
    return this.itext.isControlVisible(controlName);
  }

  isEmptyStyles(lineIndex:number){
    return this.itext.isEmptyStyles(lineIndex);
  }

  isEndOfWrapping(){
    return this.itext.isEndOfWrapping();
  }

  isOnScreen(calculateopt:boolean){
    return this.itext.isOnScreen(calculateopt);
  }

  isPartiallyOnScreen(calculateopt?:boolean){
    return this.itext.isPartiallyOnScreen(calculateopt);
  }

  isType(type:string){
    return this.itext.isType(type);
  }

  measureLine(lineIndex:number){
    return this.itext.measureLine(lineIndex);
  }

  moveCursorDown(e:Event){
    return this.itext.moveCursorDown(e);
  }

  moveCursorLeft(e:Event){
    return this.itext.moveCursorLeft(e);
  }

  moveCursorLeftWithoutShift(e:Event){
    return this.itext.moveCursorLeftWithoutShift(e);
  }

  moveCursorLeftWithShift(e:Event){
    return this.itext.moveCursorLeftWithShift(e);
  }

  moveCursorRight(e:Event){
    return this.itext.moveCursorRight(e);
  }

  moveCursorRightWithoutShift(e:Event){
    return this.itext.moveCursorRightWithoutShift(e);
  }

  moveCursorRightWithShift(e:Event){
    return this.itext.moveCursorRightWithShift(e);
  }

  moveCursorUp(e:Event){
    return this.itext.moveCursorUp(e);
  }

  moveCursorWithoutShift(offset:number){
    return this.itext.moveCursorWithoutShift(offset);
  }

  moveCursorWithShift(offset:number){
    return this.itext.moveCursorWithShift(offset);
  }

  moveTo(index:number){
    return this.itext.moveTo(index);
  }

  needsItsOwnCache(){
    return this.itext.needsItsOwnCache();
  }

  onCompositionEnd(){
    return this.itext.onCompositionEnd();
  }

  onCompositionStart(){
    return this.itext.onCompositionStart();
  }

  onDeselect(optionsopt:any){
    return this.itext.onDeselect(optionsopt)
  }

  onInput(e:Event){
    return this.itext.onInput(e);
  }

  onKeyDown(e:Event){
    return this.onKeyDown(e);
  }

  onKeyUp(e:Event){
    return this.itext.onKeyUp(e);
  }

  onSelect(optionsopt:any){
    return this.itext.onSelect(optionsopt);
  }

  paste(e:Event){
    return this.itext.paste(e);
  }

  removeChars(start:number, end:number){
    return this.itext.removeChars(start, end);
  }

  removeStyle(props:string){
    return this.itext.removeStyle(props);
  }

  removeStyleFromTo(start:number, end:number){
    return this.itext.removeStyleFromTo(start, end);
  }

  renderCursor(boundaries:any, ctx:any){
    return this.itext.renderCursor(boundaries, ctx);
  }

  renderCursorOrSelection(){
    return this.itext.renderCursorOrSelection();
  }

  renderSelection(boundaries:any, ctx:any){
    return this.itext.renderSelection(boundaries, ctx);
  }

  rotate(angle:number){
    return this.itext.rotate(angle);
  }

  saveState(optionsopt:any){
    return this.itext.saveState(optionsopt);
  }

  scale(value:number){
    return this.itext.scale(value);
  }

  scaleToHeight(value:number, absolute:boolean){
    return this.itext.scaleToHeight(value, absolute);
  }

  scaleToWidth(value:number, absolute:boolean){
    return this.itext.scaleToWidth(value, absolute);
  }

  searchWordBoundary(selectionStart:number, direction:number){
    return this.itext.searchWordBoundary(selectionStart, direction);
  }

  selectAll(){
    return this.itext.selectAll();
  }

  selectLine(selectionStart:number){
    return this.itext.selectLine(selectionStart);
  }

  selectWord(selectionStart:number){
    return this.itext.selectWord(selectionStart);
  }

  sendBackwards(intersectingopt?:boolean){
    return this.itext.sendBackwards(intersectingopt);
  }

  sendToBack(){
    return this.itext.sendToBack();
  }

  set(key:string, value:any){
    return this.itext.set(key, value)
  }

  setColor(color:string){
    return this.itext.setColor(color);
  }

  setControlsVisibility(optionsopt:any){
    return this.itext.setControlsVisibility(optionsopt);
  }

  setControlVisible(controlName:string, visible:boolean){
    return this.itext.setControlVisible(controlName, visible);
  }

  setCoords(ignoreZoomopt?:boolean, skipAbsoluteopt?:boolean){
    return this.itext.setCoords(ignoreZoomopt, skipAbsoluteopt);
  }

  setCursorByClick(e:Event){
    return this.itext.setCursorByClick(e);
  }

  setGradient(property:string, optionsopt?:any){
    return this.itext.setGradient(property, optionsopt);
  }

  setOnGroup(){
    return this.itext.setOnGroup();
  }

  setOptions(optionsopt?:any){
    return this.itext.setOptions(optionsopt);
  }

  setPatternFill(options:any, callbackopt?:Function){
    return this.itext.setPatternFill(options, callbackopt);
  }

  setPositionByOrigin(pos:any, originX:string, originY:string){
    return this.itext.setPositionByOrigin(pos, originX, originY);
  }

  setSelectionEnd(index:number){
    return this.itext.setSelectionEnd(index);
  }

  setSelectionStart(index:number){
    return this.itext.setSelectionStart(index);
  }

  setSelectionStartEndWithShift(){
    return this.itext.setSelectionStartEndWithShift();
  }

  setSelectionStyles(stylesopt?:any, startIndexopt?:any, endIndexopt?:any){
    return this.itext.setSelectionStyles(stylesopt, startIndexopt, endIndexopt);
  }

  setShadow(optionsopt?:any){
    return this.itext.setShadow(optionsopt);
  }

  setSubscript(start:number, end:number){
    return this.itext.setSubscript(start, end);
  }

  setSuperscript(start:number, end:number){
    return this.itext.setSuperscript(start, end);
  }

  setupState(optionsopt?:any){
    return this.itext.setupState(optionsopt);
  }

  shiftLineStyles(lineIndex:number, offset:number){
    return this.itext.shiftLineStyles(lineIndex, offset);
  }

  shouldCache(){
    return this.itext.shouldCache();
  }

  straighten(){
    return this.itext.straighten();
  }

  styleHas(lineIndex:number){
    return this.itext.styleHas(lineIndex);
  }

  toClipPathSVG(reviveropt?:Function){
    return this.itext.toClipPathSVG(reviveropt);
  }

  toDatalessObject(propertiesToIncludeopt?:any){
    return this.itext.toDatalessObject(propertiesToIncludeopt);
  }

  toDataURL(options:any){
    return this.itext.toDataURL(options);
  }

  toJSON(propertiesToIncludeopt?:any){
    return this.itext.toJSON(propertiesToIncludeopt);
  }

  toLocalPoint(point:any, originX:string, originY:string){
    return this.itext.toLocalPoint(point, originX, originY);
  }

  toObject(propertiesToIncludeopt?:any){
    return this.itext.toObject(propertiesToIncludeopt);
  }

  toString(){
    return this.itext.toString();
  }

  toSVG(reviveropt?:Function){
    return this.itext.toSVG(reviveropt);
  }

  transform(ctx:any){
    return this.itext.transform(ctx);
  }

  translateToCenterPoint(point:any, originX:string, originY:string){
    return this.itext.translateToCenterPoint(point, originX, originY);
  }

  translateToGivenOrigin(point:any, fromOriginX:string, fromOriginY:string, toOriginX:string, toOriginY:string){
    return this.itext.translateToGivenOrigin(point, fromOriginX, fromOriginY, toOriginX, toOriginY);
  }

  translateToOriginPoint(center:any, originX:string, originY:string){
    return this.itext.translateToOriginPoint(center, originX, originY);
  }

  viewportCenter(){
    return this.itext.viewportCenter();
  }

  viewportCenterH(){
    return this.itext.viewportCenterH();
  }

  viewportCenterV(){
    return this.itext.viewportCenterV();
  }

  willDrawShadow(){
    return this.itext.willDrawShadow();
  }
}
