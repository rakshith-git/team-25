
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DoctorsComponent } from './doctors.component';
import { AddVetService } from '../../services/add-vet.service';
import { HttpTestingController,HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('DoctorsComponent', () => {
  let component: DoctorsComponent;
  let fixture: ComponentFixture<DoctorsComponent>;
  let addVetService: AddVetService;
  let httpClientTestingModule:HttpClientTestingModule;


  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DoctorsComponent],
      providers: [
        HttpTestingController,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '1' } },
          },
        },
        {
          provide: AddVetService,
          useValue: jasmine.createSpyObj('addVetService', [
            'getVetInfo',
            'deleteVetInfo',
            'deactivateVets',
          ]),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsComponent);
    component = fixture.componentInstance;
    addVetService = TestBed.inject(AddVetService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getAllVetDetails method', () => {
      spyOn(component, 'getAllVetDetails');
      component.ngOnInit();
      expect(component.getAllVetDetails).toHaveBeenCalled();
    });
  });

  it('should retrieve data from the backend', () => {
        const testData = [
          { npiNo: 1, userName: 'John', firstName: 'deo',lastName:'testname',avatar:"string", department: 'cardio', dob:'02-03-2000', gender:'male', clinic:'jsk',mobileNo:7022856845, email:'subhash@gmail.com', address: 'bangalore', city:'Shimoga', state:'Karnataka', country:'india', shortBiography:'test string', departmentId: 12, status: true},
          { npiNo: 1, userName: 'John', firstName: 'deo',lastName:'testname',avatar:"string", department: 'cardio', dob:'02-03-2000', gender:'male', clinic:'jsk',mobileNo:7022856845, email:'subhash@gmail.com', address: 'bangalore', city:'Shimoga', state:'Karnataka', country:'india', shortBiography:'test string', departmentId: 12, status: true},

        ];
        const dataService = TestBed.inject(AddVetService);
        const httpMock = TestBed.inject(HttpTestingController);
        const httptest = TestBed.inject(HttpClientTestingModule);

        dataService.getVetInfo().subscribe(data => {
          expect(data).toEqual(testData);
        });

        const req = httpMock.expectOne('https://vetservice.dev.skillassure.com/vet/vet/view/vets');
        expect(req.request.method).toBe('GET');
        req.flush(testData);

        httpMock.verify();
      });

      it('should display the correct title as "Vets"', () => {
        const titleElement = fixture.debugElement.query(By.css('.page-title')).nativeElement;
        expect(titleElement.textContent).toContain('Vets');
      });



})
