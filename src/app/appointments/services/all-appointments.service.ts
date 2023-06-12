import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({ providedIn: "root" })
export class AllAppointmentsService {
  getAllAppointmentsByList() {
    return this.http.get(environment.appointmentUrl + "/viewAllAppointments");
  }
  getAllAppointmentsByCard() {
    return this.http.get(environment.baseUrl + "/view/card");
  }
  getAllAppointments() {
    return this.http.get(environment.baseUrl + "/get");
  }
  getPetInfoById(petId: any) {
    // return this.http.get(environment.petUrl+'/petid/{petId}');
    return this.http.get(
      `https://petservice.dev.skillassure.com/pet/pet/petid/${petId}`
    );
  }
  constructor(private http: HttpClient) {}
}
