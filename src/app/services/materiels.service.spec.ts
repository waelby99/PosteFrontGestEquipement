import { TestBed } from '@angular/core/testing';

import { MaterielsService } from './materiels.service';

describe('MaterielsService', () => {
  let service: MaterielsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterielsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
