import { TestBed } from '@angular/core/testing';

import { AddAppiontmentService } from './add-appiontment.service';

describe('AddAppiontmentService', () => {
  let service: AddAppiontmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAppiontmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
