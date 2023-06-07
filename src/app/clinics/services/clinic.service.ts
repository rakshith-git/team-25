import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  clinicURL = environment.clinicURL;
  constructor(private http: HttpClient) { }

  // method to post the data by passing all the details from the form
  public addClinic(ClinicData: any) {
    return this.http.post(this.clinicURL + '/clinics/create/clinic', ClinicData);
  }

  // method to get all clinic data by connecting with clinic backend services
  public getClinics() {
    return this.http.get(this.clinicURL + '/clinics/clinic/get/all');
  }

  // method to delete a clinic by passing clinic id through backend services
  public deleteClinic(id: number){
    return this.http.delete(this.clinicURL + '/clinics/clinic/' + id + '/remove');
  }

  // method to update the clinic by passing the updated clinic data from the edited form
  public updateClinic(ClinicData: any) {
    return this.http.put(this.clinicURL + '/clinics/clinic/update', ClinicData);
  }

  // method to get the particular clinic information by passing the clinic name
  public getClinicByName(name: string) {
    return this.http.get(this.clinicURL + '/clinics/clinic/get/name/'+ name);
  }

  // method to change the clinic status by passing status and clinic id to backend services
  public updateClinicStatus(status: string, id: number) {
    return this.http.put(this.clinicURL + '/clinics/clinic/' + id + '/status/' + status, null);
  }
}
