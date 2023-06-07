import { TestBed } from '@angular/core/testing';

import { DeleteAppointmentService } from './delete-appointment.service';

describe('DeleteAppointmentService', () => {
  let service: DeleteAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
