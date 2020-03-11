import { TestBed } from '@angular/core/testing';

import { GetShipperService } from './get-shipper.service';

describe('GetShipperService', () => {
  let service: GetShipperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetShipperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
