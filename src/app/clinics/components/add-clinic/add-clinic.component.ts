import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClinicService } from '../../services/clinic.service';
import { clinicData } from '../../clinic.model';


@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css']
})
export class AddClinicComponent implements OnInit {

  clinicmodelobj: any;
  formValue!: FormGroup

  constructor(private clinicService: ClinicService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
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

  // method to get all the added data for the clinic thorgh formcontrolnames
  // and send as an parameters for the subsequent methods
  add(){
    this.clinicmodelobj.clinicInfo = this.formValue.value.clinicInfo;
    this.clinicmodelobj.clinicName = this.formValue.value.clinicName;
    this.clinicmodelobj.location = this.formValue.value.location;
    this.clinicmodelobj.timings = this.formValue.value.openTimings+' - '+this.formValue.value.closeTimings;
    this.clinicmodelobj.phoneNumber = this.formValue.value.phoneNumber;
    this.clinicmodelobj.description = this.formValue.value.description;
    this.clinicmodelobj.status = this.formValue.value.status;
    this.clinicService.addClinic(this.clinicmodelobj).subscribe(
      (resp) => {
        this.formValue.reset();
        this.router.navigate(['/clinic']);
        console.log(resp);
      },
      (error) => {
        alert("Error while adding");
        console.log(error);
      }
    )
  }



}
