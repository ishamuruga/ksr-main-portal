import { TestBed } from '@angular/core/testing';

import { CommonUiComponentsService } from './common-ui-components.service';

describe('CommonUiComponentsService', () => {
  let service: CommonUiComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonUiComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
