import { TestBed } from '@angular/core/testing';

import { GtBootstrapIconsService } from './gt-bootstrap-icons.service';

describe('GtBootstrapIconsService', () => {
  let service: GtBootstrapIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GtBootstrapIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
