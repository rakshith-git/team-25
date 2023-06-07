import { Component, OnInit } from '@angular/core';
import { AddAppointment } from '../../models/AddAppointment';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent implements OnInit {
  appointment !: AddAppointment;
  constructor() { }

  ngOnInit(): void {
  }

}
