import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetsComponent } from './add-pets.component';

describe('AddPetsComponent', () => {
  let component: AddPetsComponent;
  let fixture: ComponentFixture<AddPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
