import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AddAppointment } from "../models/AddAppointment";
import { Appointment } from "../models/Appointment";
import { AppointmentRepositoryService } from "../repository/appointment-repository.service";
import { analyzeAndValidateNgModules } from "@angular/compiler";
//There will one service per component. But other components can also use the
//service allocated for another component via there distributers
//This layer interacts with the repository layer and has business logic
@Injectable({
  providedIn: "root",
})
export class AddAppointmentService {
  // Inject Repository in the constructor
  clinicName: any;
  clinics: any;
  constructor(
    private appointmentRepositoryService: AppointmentRepositoryService,
    private http: HttpClient
  ) {}

  // call the repository to get,post and put the data
  // Fetch the data from the form elements

  // Validate the date
  // if (data.date)
  data2DB = new Appointment(
    "APT1",
    " ",
    " ",
    " ",
    " ",
    " ",
    true,
    " ",
    " ",
    " "
  );
  embedAppointmentData(appointmentForm: AddAppointment,) {
    this.data2DB.date = appointmentForm.date;
    this.data2DB.time = appointmentForm.time;
    this.data2DB.moreDetails = appointmentForm.moreDetails;
    this.data2DB.documents = appointmentForm.documents;
    this.data2DB.appointmentId = "17c580ae-a2b0-44d3-8257-3f21cc5911a0";
    // When the appointment is first created the default status is pending
    this.data2DB.appointmentStatus = "PENDING";
    this.data2DB.status = true;
    console.log(this.data2DB);

    this.appointmentRepositoryService.addAppointmentDetails(this.data2DB);
    alert("Appointment successfully added");
  }
  getAllAppointments() {
    return this.appointmentRepositoryService.getUsers();
  }
  async getClinicByName(name: string) {
    return this.appointmentRepositoryService.getClinicInfo(name).subscribe(
      (result) => {
        this.clinicName = result;
        console.log(result);
      },
      (error) => {
        alert("Clinic details not found");
        console.log(error);
        return false;
      }
    );
  }



  getAllClinics() {
    return this.appointmentRepositoryService.getAllClinics();
  }
  getAllPets() {
    return this.appointmentRepositoryService.getAllPets();
  }
  getAllVets() {
    return this.appointmentRepositoryService.getAllVets();
  }
}
