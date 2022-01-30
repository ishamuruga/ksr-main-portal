import { TestBed } from '@angular/core/testing';

import { GlobalExceptionService } from './global-exception.service';

describe('GlobalExceptionService', () => {
  let service: GlobalExceptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalExceptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
