import { TestBed } from '@angular/core/testing';

import { ShootingsService } from './shootings.service';

describe('ShootingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShootingsService = TestBed.get(ShootingsService);
    expect(service).toBeTruthy();
  });
});
