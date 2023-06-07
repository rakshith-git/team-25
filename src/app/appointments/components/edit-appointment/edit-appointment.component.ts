import { Component, Input, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { AddAppointment } from '../../models/AddAppointment';
import { EditAppointmentService } from '../../services/edit-appointment.service';
import { AllAppointmentsComponent } from '../all-appointments/all-appointments.component';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  appointmentId = localStorage.getItem('appointmentId') ?? ' ';
  dataFromDB : any;
  
  constructor(private service : EditAppointmentService) {
    
   }
  ngOnInit(): void {
    console.log("Fetched the appointmentId : " + this.appointmentId);
  }
  onSubmit(data : AddAppointment) {
    data.appointmentId = this.appointmentId;

    this.dataFromDB

    this.service.editAppointment(data);
    alert("Appointment has been edited");
  }
}
