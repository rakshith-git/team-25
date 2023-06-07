
import {Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClinicService } from '../../services/clinic.service';
import { clinicData } from '../../clinic.model';

@Component({
  selector: 'app-clinic-information',
  templateUrl: './clinic-information.component.html',
  styleUrls: ['./clinic-information.component.css']
})
export class ClinicInformationComponent implements OnInit {

  clinicData:  clinicData[] | undefined;
  clinic_Name!: string;
  clinicID!: number;
  formValue!: FormGroup;

  constructor(private clinicService: ClinicService, private formBuilder: FormBuilder)
  {  }

  ngOnInit(): void {
    this.getClinicDetails();
    this.formValue=this.formBuilder.group({
      clinicId:[''],
      clinicInfo:['',[Validators.required, Validators.minLength(3)]],
      clinicName:['',[Validators.required, Validators.minLength(3)]],
      location:['',[Validators.required, Validators.minLength(3)]],
      openTimings:['',[Validators.required]],
      closeTimings:['',[Validators.required]],
      phoneNumber:['',[Validators.required, Validators.minLength(10), Validators.pattern("[0-9]*")]],
      description:[''],
      status:['',Validators.required]
    })
  }

  // method to all the added clinic details
  getClinicDetails(){
    this.clinicService.getClinics().subscribe(
      (resp:any) => {
        console.log(resp);
        this.clinicData = resp;
      },
      (error) => {
        console.log(error);
        alert("Error while loading data...")
      }
    );
  }

  // method to delete the clinic details according to the clinic Id
  deleteClinicDetail() {
    this.clinicService.deleteClinic(this.clinicID).subscribe(
       (resp) => {
        console.log(resp);
        // this.clinicDetails = resp;
        this.getClinicDetails();
      },
      (error) => {
        alert("Error while deleting");
        console.log(error);
      }
    );
  }

  // method to get the clinic details by passing the clinic name as a parameter
  getClinicDetailsByName(){
    this.clinicService.getClinicByName(this.clinic_Name.toLowerCase()).subscribe(
      (resp) => {
        console.log(resp);
        // this.clinicDetails = resp;
      },
      (error) => {
        alert("record does not exist");
        console.log(error);
      }
    );
  }

  setClinicId(clinic: any) {
    this.clinicID = clinic.clinicId;
  }

// method to autofill the clinic data with respect to the clinic ID
  edit(clinic: any) {
    this.formValue.controls['clinicId'].setValue(clinic.clinicId);
    this.formValue.controls["clinicInfo"].setValue(clinic.clinicInfo);
    this.formValue.controls["clinicName"].setValue(clinic.clinicName);
    this.formValue.controls["location"].setValue(clinic.location);
    this.formValue.controls["phoneNumber"].setValue(clinic.phoneNumber);
    this.formValue.controls["description"].setValue(clinic.description);
    this.formValue.controls["status"].setValue(clinic.status);
  }

  // method to send the updated clinic details through the form values
  updateClinic() {
    this.formValue.value.timings = this.formValue.value.openTimings + ' - ' + this.formValue.value.closeTimings
    this.clinicService.updateClinic(this.formValue.value).subscribe(
      (resp) => {
        console.log(resp);
        // this.clinicDetails = resp;
        this.getClinicDetails();
      },
      (err) => {
        console.log(err);
        alert('Error updating');
      }
    );
  }

  // method to change the status of clinic by passing the status and the clinic ID
  updateStatus(status: string, id: number){
    this.clinicService.updateClinicStatus(status, id).subscribe(
      (resp)=>{
        this.getClinicDetails();
        console.log(resp);
      },
      (err)=>{
        console.log(err);
        alert('Error while updating the status');
      }
    );
  }
}
