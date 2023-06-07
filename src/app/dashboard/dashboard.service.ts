import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  //URLS

  constructor(private http: HttpClient) {

  }

 getListOfVet(){

  return this.http.get(`${environment.VetUrl}/vet/view/vets`);

  }



//  getPetDepartment(){

//   return this.http.get(this.dashboardURL+'/petzeydepartment/department/alldepartments');

//   }



  getTotalVets(){
    return this.http.get(`${environment.VetUrl}/vet/view/getCount`);

  }

  getTotalPets(){
    return this.http.get(`${environment.petUrl}/petCount`);

  }

  takeUp(id: string){
    console.log("APPROVED")
    return this.http.put(`${environment.appointmentUrl}/dashboard/dto`+id,null);
  }

  gettotalAppointmentCount(){
  // https://appointmentservice.dev.skillassure.com/appointment/appointments/get/count/total
    return this.http.get(`${environment.appointmentUrl}/get/count/total`);

  }

  getapprovedAppointmentsCount(){
    // https://appointmentservice.dev.skillassure.com/appointment/appointments/get/count/approved
    return  this.http.get(`${environment.appointmentUrl}/get/count/approved`);

  }

  getpendingAppointmentsCount(){
// https://appointmentservice.dev.skillassure.com/appointment/appointments/get/count/pending
    return this.http.get(`${environment.appointmentUrl}/get/count/pending`);

  }

  getcancelledAppointmentsCount() {
// https://appointmentservice.dev.skillassure.com/appointment/appointments/get/count/cancelled
    return this.http.get(`${environment.appointmentUrl}/get/count/cancelled`);

  }
  getPendingAppointmentsForDashboard() {
    // https://appointmentservice.dev.skillassure.com/appointment/appointments/dashboard/dto
    return this.http.get(`${environment.appointmentUrl}/dashboard/dto`);
  }

  getCompletedAppointments() {
    //   urlCompletedAppointments='https://appointmentservice.dev.skillassure.com/appointment/appointments/get/count/completed'
    return this.http.get(`${environment.appointmentUrl}/get/count/completed`);

  }
}

