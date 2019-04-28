import { TestBed } from '@angular/core/testing';

import { ItextService } from './itext.service';

describe('ItextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItextService = TestBed.get(ItextService);
    expect(service).toBeTruthy();
  });
});
