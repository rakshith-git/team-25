import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDoctorComponent } from './edit-doctor.component';
import { By } from '@angular/platform-browser';

describe('EditDoctorComponent', () => {
  let component: EditDoctorComponent;
  let fixture: ComponentFixture<EditDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // write the unit test case to check the heading Edit Profile whether its correct or not
  it('should display the correct title as "Edit Profile"', () => {

  });
});
