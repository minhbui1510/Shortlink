import { TestBed } from '@angular/core/testing';

import { BaseSeviceService } from './base-sevice.service';

describe('BaseSeviceService', () => {
  let service: BaseSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
