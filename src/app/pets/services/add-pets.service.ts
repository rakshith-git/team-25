import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddPetsService {

  constructor(private http:HttpClient) { }

  petServiceUrl = environment.petUrl;

  // method to edit the Pet details by passing all the updated pet object to PUT api of backend services
  public editPet(PetData: any) {
    return this.http.put(this.petServiceUrl+`/pet/edit`,PetData);
  }

  // method to get the details of a particular pet by passing the pet id
   public getPetInfoById(petId: string) {
    return this.http.get(`${this.petServiceUrl}/petid/${petId}`);
  }

  // method to get all pet details by calling backend services
  getPetList() {
    return this.http.get(this.petServiceUrl+'/getallpets');
  }

  // method to update the pet status by calling put method
  public updatePetStatus( petId: any){
    return this.http.put(this.petServiceUrl + '/petId/' + petId + '/update_status/', petId);
  }

  // method to post the pet Data by passing all pet information from the form to backend services
  public addPetz(PetData:any) {
  return this.http.post(this.petServiceUrl+`/addpet`,PetData);
  }

  // method to delete the pet details by passing Pet ID to the backend services
  public removePetz(petID:any) {
    return this.http.delete(this.petServiceUrl+'/delete/'+petID);
  }

 public deleteVetInfo(id: string) {
   return this.http.delete(this.petServiceUrl+`delete/${id}`) }


}
