import { TestBed } from '@angular/core/testing';

import { TokrnStorageService } from './tokrn-storage.service';

describe('TokrnStorageService', () => {
  let service: TokrnStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokrnStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
