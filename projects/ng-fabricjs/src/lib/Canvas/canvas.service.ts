import { Injectable, ViewChild, OnInit } from '@angular/core';
import 'fabric';
import { CanvasInterface } from './canvas.interface';
declare const fabric: any;

@Injectable({
  providedIn: 'root'
})
export class CanvasService implements OnInit {

  public canvas:any;

  constructor() {}

  ngOnInit(){}

  /**
   * @param  {string} el
   * @param  {any} options?
   * Initialize canvas
   */
  init(el:any,options?:any){
    this.canvas=new fabric.Canvas(el,options);
  }

  setOptions(options:CanvasInterface){
    this.canvas.allowTouchScrolling = options.allowTouchScrolling;
    this.canvas.altActionKey = options.altActionKey;
    this.canvas.altSelectionKey = options.altSelectionKey;
    this.canvas.backgroundVpt = options.backgroundVpt;
    this.canvas.centeredKey = options.centeredKey;
    this.canvas.centeredRotation = options.centeredRotation;
    this.canvas.centeredScaling = options.centeredScaling;
    this.canvas.clipTo = options.clipTo;
    this.canvas.containerClass = options.containerClass;
    this.canvas.controlsAboveOverlay = options.controlsAboveOverlay;
    this.canvas.defaultCursor = options.defaultCursor;
    this.canvas.enableRetinaScaling = options.enableRetinaScaling;
    this.canvas.fireMiddleClick = options.fireMiddleClick;
    this.canvas.fireRightClick = options.fireRightClick;
    this.canvas.freeDrawingCursor = options.freeDrawingCursor;
    this.canvas.FX_DURATION = options.FX_DURATION;
    this.canvas.hoverCursor = options.hoverCursor;
    this.canvas.imageSmoothingEnabled = options.imageSmoothingEnabled;
    this.canvas.includeDefaultValues = options.includeDefaultValues;
    this.canvas.interactive = options.interactive;
    this.canvas.isDrawingMode = options.isDrawingMode;
    this.canvas.moveCursor = options.moveCursor;
    this.canvas.notAllowedCursor = options.notAllowedCursor;
    this.canvas.overlayVpt = options.overlayVpt;
    this.canvas.perPixelTargetFind = options.perPixelTargetFind;
    this.canvas.preserveObjectStacking = options.preserveObjectStacking;
    this.canvas.renderOnAddRemove = options.renderOnAddRemove;
    this.canvas.rotationCursor = options.rotationCursor;
    this.canvas.selection = options.selection;
    this.canvas.selectionBorderColor = options.selectionBorderColor;
    this.canvas.selectionColor = options.selectionColor;
    this.canvas.selectionDashArray = options.selectionDashArray;
    this.canvas.selectionFullyContained = options.selectionFullyContained;
    this.canvas.selectionKey = options.selectionKey;
    this.canvas.selectionLineWidth = options.selectionLineWidth;
    this.canvas.skipOffscreen = options.skipOffscreen;
    this.canvas.skipTargetFind = options.skipTargetFind;
    this.canvas.snapAngle = options.snapAngle;
    this.canvas.snapThreshold = options.snapThreshold;
    this.canvas.stateful = options.stateful;
    this.canvas.stopContextMenu = options.stopContextMenu;
    this.canvas.svgViewportTransformation = options.svgViewportTransformation;
    this.canvas.targetFindTolerance = options.targetFindTolerance;
    this.canvas.uniScaleKey = options.uniScaleKey;
    this.canvas.uniScaleTransform = options.uniScaleTransform;
    this.canvas.viewportTransform = options.viewportTransform;
  }

  chooseObjectsToRenderer():any[]{
    return this.canvas._chooseObjectsToRender();
  }

  setCursorFromEvent(e, target){
    return this.canvas.__setCursorFromEvent(e, target);
  }

  absolutePan(point) {
    return this.canvas.absolutePan(point);
  }

  add(...object:any) {
    return this.canvas.add(...object);
  }

  bringForward(object:any, intersectingopt?:boolean) {
    return this.canvas.bringForward(object, intersectingopt);
  }

  bringToFront(object){
    return this.canvas.bringToFront(object);
  }

  calcOffset(){
    return this.calcOffset();
  }

  calcViewportBoundaries() {
    return this.canvas.calcViewportBoundaries();
  }
  
  centerObject(object){
    return this.canvas.centerObject(object);
  }

  centerObjectH(object) {
    return this.canvas.centerObjectH(object);
  }

  centerObjectV(object) {
    return this.canvas.centerObjectV(object);
  }

  clearContext(ctx) {
    return this.canvas.clearContext(ctx);
  }

  clear() {
    return this.canvas.clear();
  }

  clone(callbackopt?:any, propertiesopt?:any){
    return this.canvas.clone(callbackopt, propertiesopt);
  }

  cloneWithoutData(callbackopt){
    return this.canvas.cloneWithoutData(callbackopt);
  }

  complexity() {
    return this.canvas.complexity();
  }

  contains(object) {
    return this.canvas.contains(object);
  }

  discardActiveObject(e) {
    return this.canvas.discardActiveObject(e);
  }

  dispose(){
    return this.canvas.dispose();
  }

  findTarget(e, skipGroup:boolean){
    return this.canvas.findTarget(e, skipGroup);
  }

  forEachObject(callback:Function, context:any){
    return this.canvas.forEachObject(callback, context);
  }

  getActiveObject() {
    return this.getActiveObject();
  }

  getActiveObjects(){
    return this.canvas.getActiveObjects();
  }

  getCenter(){
    return this.canvas.getCenter();
  }

  getContext(){
    return this.canvas.getContext();
  }

  getElement(){
    return this.canvas.getElement();
  }

  getHeight(){
    return this.canvas.getHeight();
  }

  getObjects(typeopt?:string){
    return this.getObjects(typeopt);
  }

  getPointer(e, ignoreZoom){
    return this.canvas.getPointer(e, ignoreZoom);
  }

  getSelectionContext(){
    return this.getSelectionContext();
  }

  getSelectionElement(){
    return this.getSelectionElement();
  }

  getVpCenter() {
    return this.canvas.getVpCenter();
  }

  getWidth(){
    return this.canvas.getWidth();
  }

  getZoom(){
    return this.canvas.getZoom();
  }

  insertAt(object:any , index:number, nonSplicing:boolean){
    return this.canvas.insertAt(object, index, nonSplicing);
  }

  isEmpty(){
    return this.canvas.isEmpty();
  }

  item(index:number){
    return this.canvas.item(index);
  }

  remove(...object:any){
    return this.canvas.remove(object);
  }

  removeListeners(){
    return this.canvas.removeListeners();
  }

  renderAll(){
    return this.canvas.renderAll();
  }

  sendBackwards(object:any, intersectingopt:boolean){
    return this.canvas.sendBackwards(object, intersectingopt);
  }

  sendToBack(object:any){
    return this.canvas.sendToBack(object);
  }

  setActiveObject(object:any, eopt:any){
    return this.canvas.setActiveObject(object, eopt);
  }

  setBackgroundColor(backgroundColor:string, callback:Function){
    return this.canvas.setBackgroundColor(backgroundColor, callback);
  }

  setBackgroundImage(image:string, callback:Function, optionsopt:any){
    return this.canvas.setBackgroundImage(image, callback, optionsopt);
  }

  setCursor(value:string){
    return this.canvas.setCursor(value);
  }

  setDimensions(dimensions, optionsopt){
    return this.canvas.setDimensions(dimensions, optionsopt);
  }

  setHeight(value, optionsopt?:any){
    return this.canvas.setHeight(value, optionsopt);
  }
}
