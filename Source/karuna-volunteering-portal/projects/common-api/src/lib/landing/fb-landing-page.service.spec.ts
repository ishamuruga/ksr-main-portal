import { TestBed } from '@angular/core/testing';

import { FbLandingPageService } from './fb-landing-page.service';

describe('FbLandingPageService', () => {
  let service: FbLandingPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbLandingPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
