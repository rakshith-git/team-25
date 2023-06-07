import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { vetDetails } from '../../models/vet-details';
import { AddVetService } from '../../services/add-vet.service';
import { update } from './editInfo';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css'],
})
export class EditDoctorComponent implements OnInit {
  updatedetails: vetDetails = {
    npiNo: 0,
    firstName: '',
    lastName: '',
    department: '',
    email: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    mobileNo: 0,
    shortBiography: '',
    status: true,
    avatar: '',
    userName: '',
    dob: '',
    clinic: '',
    country: '',
    departmentId: 0,
  };
  updatedProfile: any;

  vetId: any;
  DisplayData: any;
  vetDetails: any;
  constructor(
    private update: AddVetService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  updateForm = new FormGroup({
    npiNo: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    department: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    mobileNo: new FormControl(''),
    shortBiography: new FormControl(''),
    status: new FormControl(''),
    avatar: new FormControl(''),
    userName: new FormControl(''),
    dob: new FormControl(''),
    clinic: new FormControl(''),
    country: new FormControl(''),
    departmentId: new FormControl(''),
  });

  // methods to get control over the form for the validation purpose
  get firstName() {
    return this.updateForm.get('firstName');
  }
  get department() {
    return this.updateForm.get('department');
  }
  get gender() {
    return this.updateForm.get('gender');
  }
  get mobileNo() {
    return this.updateForm.get('mobileNo');
  }

  ngOnInit(): void {
    // to get the selected vet ID through url, to get all the details with respect to the selected Vet ID
    this.vetId = this.activeRoute.snapshot.paramMap.get('npiNo');
    console.log(this.vetId);

    // code to get data according to the selected vet ID and
    // to map in the form before user start editing the fields
    this.update.getCurrentData(this.vetId).subscribe((result) => {
      this.vetDetails = result;
      console.log(this.vetDetails['npiNo']);
      this.updateForm = new FormGroup({
        npiNo: new FormControl(this.vetDetails['npiNo']),
        firstName: new FormControl(this.vetDetails['firstName'], [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
        lastName: new FormControl(this.vetDetails['lastName']),
        department: new FormControl(this.vetDetails['department'], [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
        email: new FormControl(this.vetDetails['email']),
        gender: new FormControl(this.vetDetails['gender'], [
          Validators.required,
        ]),
        address: new FormControl(this.vetDetails['address']),
        city: new FormControl(this.vetDetails['city']),
        state: new FormControl(this.vetDetails['state']),
        mobileNo: new FormControl(this.vetDetails['mobileNo'], [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('[6-9]{1}[0-9]{9}'),
        ]),
        shortBiography: new FormControl(this.vetDetails['shortBiography']),
        status: new FormControl(this.vetDetails['status']),
        avatar: new FormControl(this.vetDetails['avatar']),
        userName: new FormControl(this.vetDetails['userName']),
        dob: new FormControl(this.vetDetails['dob']),
        clinic: new FormControl(this.vetDetails['clinic']),
        country: new FormControl(this.vetDetails['country']),
        departmentId: new FormControl(this.vetDetails['departmentId']),
      });
    });
  }

  // method to pass the edited vet details by passing all the form values
  public updateProfile() {
    let profile = this.update.editVetInfo(this.updateForm.value);
    profile.subscribe((data) => {
      this.router.navigate(['/vets']);
      console.log(this.updatedetails);
    });
  }

  public confirm() {
    alert('The data has been updated');
  }
}
