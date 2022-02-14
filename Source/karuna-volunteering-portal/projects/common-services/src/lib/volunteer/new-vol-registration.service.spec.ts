import { TestBed } from '@angular/core/testing';

import { NewVolRegistrationService } from './new-vol-registration.service';

describe('NewVolRegistrationService', () => {
  let service: NewVolRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewVolRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
