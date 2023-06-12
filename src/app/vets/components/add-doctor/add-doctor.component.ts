import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { vetDetails } from '../../models/vet-details';
import { AddVetService } from '../../services/add-vet.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  adddetails: vetDetails = {
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
    departmentId: 0
  }

  vetData:any;

  constructor(private addservice: AddVetService, private router: Router) { }

  // add Vet form description and validation for the fields
  addForm = new FormGroup({
    npiNo: new FormControl(''),
    firstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    lastName: new FormControl(''),
    department: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email: new FormControl('',[Validators.required , Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    gender: new FormControl(''),
    address: new FormControl('',[Validators.required]),
    city: new FormControl(''),
    state: new FormControl(''),
    // Write the code to validate the mobile number with a minimum length of 10 digits, the pattern should contain only the numbers.
    mobileNo: new FormControl(''),
    shortBiography: new FormControl(''),
    status: new FormControl(''),
    avatar: new FormControl(''),
    userName: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required,Validators.pattern("[0-9]{2}[-]{1}[0-9]{2}[-]{1}[0-9]{4}")]),
    clinic: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    departmentId: new FormControl(''),
  })


  ngOnInit(): void {
  }

  // Once the form is filled then after submitting it, this method will call
 addVet(){
     let vet=this.addservice.addVetInfo(this.adddetails);
     vet.subscribe((data:any)=>{
      // write the code to navigate back to vets screen once vet details has been added
       
     console.log(data);
    },
    (error:any)=>
    { console.log("Unable to add",error);
  });
}

  public confirm() {
    alert("The data has been Submitted")

  }

}
