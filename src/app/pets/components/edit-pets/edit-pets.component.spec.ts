import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPetsComponent } from './edit-pets.component';

describe('EditPetsComponent', () => {
  let component: EditPetsComponent;
  let fixture: ComponentFixture<EditPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
