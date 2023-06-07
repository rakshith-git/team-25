import { TestBed } from '@angular/core/testing';

import { VetsRepositoryService } from './vets-repository.service';

describe('VetsRepositoryService', () => {
  let service: VetsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
