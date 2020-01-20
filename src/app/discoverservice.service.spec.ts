import { TestBed } from '@angular/core/testing';

import { DiscoverserviceService } from './discoverservice.service';

describe('DiscoverserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscoverserviceService = TestBed.get(DiscoverserviceService);
    expect(service).toBeTruthy();
  });
});
