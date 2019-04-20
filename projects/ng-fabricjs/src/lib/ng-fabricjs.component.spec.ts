import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFabricjsComponent } from './ng-fabricjs.component';

describe('NgFabricjsComponent', () => {
  let component: NgFabricjsComponent;
  let fixture: ComponentFixture<NgFabricjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFabricjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFabricjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
