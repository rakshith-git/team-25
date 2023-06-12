import { TestBed } from '@angular/core/testing';

import { AppointmentRepositoryService } from './appointment-repository.service';

describe('AppointmentRepositoryService', () => {
  let service: AppointmentRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
