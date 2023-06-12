import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetsRoutingModule } from './vets-routing.module';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';



@NgModule({
  declarations: [
    DoctorInfoComponent,
    EditDoctorComponent,
    
  ],
  imports: [
    CommonModule,
    VetsRoutingModule
  ]
})
export class VetsModule { }
