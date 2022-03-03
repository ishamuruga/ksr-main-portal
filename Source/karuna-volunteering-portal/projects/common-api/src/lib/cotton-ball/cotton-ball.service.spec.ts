import { TestBed } from '@angular/core/testing';

import { CottonBallService } from './cotton-ball.service';

describe('CottonBallService', () => {
  let service: CottonBallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CottonBallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
