import { TestBed } from '@angular/core/testing';

import { AddVetService } from './add-vet.service';

describe('AddVetsService', () => {
  let service: AddVetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddVetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
