import { TestBed } from '@angular/core/testing';

import { KVolServicesService } from './k-vol-services.service';

describe('KVolServicesService', () => {
  let service: KVolServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KVolServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
