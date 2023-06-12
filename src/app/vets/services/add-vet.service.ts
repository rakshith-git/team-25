import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AddVetService {
  vetServiceUrl = environment.VetUrl;

  constructor(private http: HttpClient) {}

  // method to get all the vet details from backend through environment file
  getVetInfo() {
    let url = `${this.vetServiceUrl}/vet/view/vets`;
    return this.http.get(url);
  }

  // method to get the vet details of a particular vet by passing the Vet ID
  getVetInfoById(id: string) {
    return this.http.get(`${this.vetServiceUrl}/vet/vet/getById/${id}`);
  }

  // method to call put api to update the vet details
  editVetInfo(updated: any) {
    let url = `${this.vetServiceUrl}/vet/vet/editVetDetails`;
    return this.http.put(url, updated, { responseType: 'text' as 'json' });
  }

  // method to delete the vet from DB using backend services by passing vet ID
  deleteVetInfo(id: number) {
    return this.http.delete(
      `${this.vetServiceUrl}/vet/vet/deleteVetById/${id}`
    );
  }

  // method to get the vet details of a particular vet by passing the Vet ID
  getCurrentData(id: string) {
    return this.http.get(`${this.vetServiceUrl}/vet/vet/getById/${id}`);
  }

  // method to create a new vet by passing all the vet details from the form
  addVetInfo(vet: any): Observable<any>  {
    let url = `${this.vetServiceUrl}/vet/vet/add`;
    return this.http.post(url, vet, { responseType: 'text' as 'json' });
  }

  getAppointmentByName(vetName: string) {
    return this.http.get(
      `${this.vetServiceUrl}/vet/view/appointments/${vetName}`
    );
  }

  // method to change the status of vet, using backend services by passing vet ID
  deactivateVets(id: number) {
    return this.http.patch(
      `${this.vetServiceUrl}/vet/vet/deactivateVet/${id}`,
      id,
      { responseType: 'text' as 'json' }
    );
  }
}
