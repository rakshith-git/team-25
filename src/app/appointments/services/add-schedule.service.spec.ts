import { TestBed } from '@angular/core/testing';

import { AddScheduleService } from './add-schedule.service';

describe('AddScheduleService', () => {
  let service: AddScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
