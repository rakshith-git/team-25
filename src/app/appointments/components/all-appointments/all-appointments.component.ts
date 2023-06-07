import { Component, Input, OnInit } from "@angular/core";
import { AddAppointmentService } from "../../services/add-appointment.service";

import { ActivatedRoute } from "@angular/router";
import { AllAppointmentsService } from "../../services/all-appointments.service";
import { DeleteAppointmentService } from "../../services/delete-appointment.service";

@Component({
  selector: "app-all-appointments",
  templateUrl: "./all-appointments.component.html",
  styleUrls: ["./all-appointments.component.css"],
})
export class AllAppointmentsComponent implements OnInit {
  cardInfo: any;
  appointmentId!: string;
  appointmentDeatils: any;

  constructor(
    private addAppointmentsService: AddAppointmentService,
    private allAppointmentsService: AllAppointmentsService,
    private deleteAppointmentService: DeleteAppointmentService
  ) {}

  ngOnInit(): void {
    // Returns a list of appointments in List Format
    this.getAllAppointmentsByList()

  }

  getAllAppointmentsByList(){
  this.allAppointmentsService.getAllAppointmentsByList().subscribe(
    (resp:any) => {
      console.log(resp);
      this.appointmentDeatils = resp;
    },
    (error) => {
      console.log(error);
      alert("Error while loading data...")
    }
  );
  }

  list: boolean = false;
  card: boolean = true;

  lists() {
    this.list = !this.list;
    this.card = !this.card;
  }
  cards() {
    this.card = !this.card;
    this.list = !this.list;
  }

  deleteAppointment(id: string) {
    this.deleteAppointmentService.deleteById(id);
    this.allAppointmentsService
      .getAllAppointmentsByList()
      .subscribe((result) => {
        console.log("Data " + result);
      });
  }

  cancelAppointment(id: string) {}

  storeAppointmentId(id: string) {
    localStorage.setItem("appointmentId", id);
    console.log("Stored Appointment Id: " + id);
  }
}
