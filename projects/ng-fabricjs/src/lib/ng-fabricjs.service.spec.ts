import { TestBed } from '@angular/core/testing';

import { NgFabricjsService } from './ng-fabricjs.service';

describe('NgFabricjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFabricjsService = TestBed.get(NgFabricjsService);
    expect(service).toBeTruthy();
  });
});
