import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppiontmentsRoutingModule } from './appiontments-routing.module';
import { AppointmentHistoryComponent } from './components/appointment-history/appointment-history.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';


@NgModule({
  declarations: [
    AppointmentHistoryComponent,
    CreateAppointmentComponent
  ],
  imports: [
    CommonModule,
    AppiontmentsRoutingModule,
  
  ]
})
export class AppiontmentsModule { }
