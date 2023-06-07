import { TestBed } from '@angular/core/testing';

import { AllAppointmentsService } from './all-appointments.service';

describe('AllAppointmentsService', () => {
  let service: AllAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
