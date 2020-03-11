import { TestBed } from '@angular/core/testing';

import { ShipperOnlyGuard } from './shipper-only.guard';

describe('ShipperOnlyGuard', () => {
  let guard: ShipperOnlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShipperOnlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
