import { Injectable } from '@angular/core';
import { AppointmentRepositoryService } from '../repository/appointment-repository.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteAppointmentService {

  constructor(private repository : AppointmentRepositoryService) { }
    message:any; 
    deleteById(id:string){
      let deleteMessage = confirm("Are you sure you want to delete");
      if(deleteMessage){
        let deletedAppointment=this.repository.deleteAppointmentInfo(id);
        deletedAppointment.subscribe(resp=>this.message=resp)
        console.log(deletedAppointment);
        alert("Successfully deleted")
        
      }
      else{
        alert("Error deleting")
      }
    }
}
