import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Appointment } from '../models/Appointment';
import { ApiPaths } from 'src/environments/api.paths';
import { map } from "rxjs/operators";

//This is where you make API calls. There will be one repository for one functional module

@Injectable({
  providedIn: 'root'
})
export class AppointmentRepositoryService {
   apiUrl : any;
   clinicUrl : any;
   fetchAllClinicsUrl : any;
   // inject HttpClient in the constructor
   constructor(private module : HttpClientModule, private http : HttpClient) {
       // Get the URL from environment file
        this.apiUrl = environment.baseUrl;
   
    }

   // http Call to get , post, put

    addAppointmentDetails(obj : Appointment) {
      this.http.post(this.apiUrl + '/add', obj
      ).subscribe(
        (data:any) => {
          console.log(data);
        }
      )
    }
    // Edit appointment details
    editAppointmentDetails(obj : Appointment) {
      this.http.post(this.apiUrl + '/edit', obj
      ).subscribe(
        (data:any) => {
          console.log(data);
        }
      )
    }

    // Get appointment details
      getUsers(): Observable<Appointment> {
        return this.http.get(this.apiUrl+ ApiPaths.get).pipe(
            map((response:any) => response.json()));
    }

    // Delete an appointment by ID
    deleteAppointmentInfo(id:string){
      return this.http.delete(`https://appointmentservice.dev.skillassure.com/appointment/appointments/appointment/delete/${id}`)
    }

    // Get clinic details by name
    getClinicInfo(name:string) {
      return this.http.get(this.clinicUrl + `/${name}`);
    }

    getAllClinics() {
      return this.http.get(`${environment.clinicURL}/clinics/clinic/get/all`);
    }

    getAllPets() {
      return this.http.get(`${environment.petUrl}/getallpets`);

    }
    getAllVets() {
      return this.http.get(`${environment.VetUrl}/vet/view/vets`);
    }
    getDepartmentById(id : number) {
      return this.http.get(environment.getDeptById + `/${id}`);
    }
}
