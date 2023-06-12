import { Injectable } from '@angular/core';
import { AddAppointment } from '../models/AddAppointment';
import { Appointment } from '../models/Appointment';
import { AppointmentRepositoryService } from '../repository/appointment-repository.service';

@Injectable({
  providedIn: 'root'
})
export class EditAppointmentService {
  data2DB  = new Appointment(" ", 
  " ",
  " ",
  " ",
  " ",
  " ",
  true,
  " ",
  " ",
  " ");
  constructor(private repository : AppointmentRepositoryService) { }

  editAppointment(appointmentForm : AddAppointment) {
    this.data2DB.date = appointmentForm.date;
      this.data2DB.time = appointmentForm.time;
      this.data2DB.moreDetails = appointmentForm.moreDetails;
      this.data2DB.documents = appointmentForm.documents;
      this.data2DB.appointmentId = appointmentForm.appointmentId;
      // When the appointment is first created the default status is pending
      this.data2DB.appointmentStatus = "PENDING";
      this.data2DB.status = true;
      console.log(this.data2DB);
    this.repository.editAppointmentDetails(this.data2DB);
  }
}
