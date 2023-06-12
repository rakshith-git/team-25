import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientTestingModule} from '@angular/common/http/testing';
import { AddDoctorComponent } from './add-doctor.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AddVetService } from '../../services/add-vet.service';
import { By } from '@angular/platform-browser';

describe('AddDoctorComponent', () => {
  let component: AddDoctorComponent;
  let fixture: ComponentFixture<AddDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDoctorComponent ],
      imports:[FormsModule,
      ReactiveFormsModule,
      HttpClientTestingModule,
      RouterTestingModule],
      providers:[AddVetService]


    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Add vet', () => {
    const fixture=TestBed.createComponent(AddDoctorComponent);
    fixture.detectChanges();
    const vetData = fixture.nativeElement;
    expect(vetData.querySelector('.page-title').textContent).toContain('Add Vets');

  });

  it('should display the label with a required indicator first Name', () => {
  // write the unit test case to check the required field for the first name while adding the doctor name
  });

});
