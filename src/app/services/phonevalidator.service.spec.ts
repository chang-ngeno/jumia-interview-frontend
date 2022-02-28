import { TestBed } from '@angular/core/testing';

import { PhonevalidatorService } from './phonevalidator.service';

describe('PhonevalidatorService', () => {
  let service: PhonevalidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonevalidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
