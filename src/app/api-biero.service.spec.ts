import { TestBed } from '@angular/core/testing';

import { ApiBieroService } from './api-biero.service';

describe('ApiBieroService', () => {
  let service: ApiBieroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBieroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
