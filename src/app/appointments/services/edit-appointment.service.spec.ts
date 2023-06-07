import { TestBed } from '@angular/core/testing';

import { EditAppointmentService } from './edit-appointment.service';

describe('EditAppointmentService', () => {
  let service: EditAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
