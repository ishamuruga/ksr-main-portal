import { TestBed } from '@angular/core/testing';

import { FbUtilService } from './fb-util.service';

describe('FbUtilService', () => {
  let service: FbUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
