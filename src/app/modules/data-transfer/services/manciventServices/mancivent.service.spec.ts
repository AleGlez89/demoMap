import { TestBed } from '@angular/core/testing';

import { ManciventServiceService } from './mancivent.service';

describe('ManciventServiceService', () => {
  let service: ManciventServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManciventServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
