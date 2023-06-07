import { TestBed } from '@angular/core/testing';

import { PetsRepositoryService } from './pets-repository.service';

describe('PetsRepositoryService', () => {
  let service: PetsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
