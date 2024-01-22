import { TestBed } from '@angular/core/testing';

import { GenerateDetailsService } from './generate-details.service';

describe('GenerateDetailsService', () => {
  let service: GenerateDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
