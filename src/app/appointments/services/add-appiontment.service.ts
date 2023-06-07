import { Injectable } from '@angular/core';
import { AppointmentRepositoryService } from '../repository/appointment-repository.service';
//There will one service per component. But other components can also use the
//service allocated for another component via there distributers
//This layer interacts with the repository layer and has business logic
@Injectable({
  providedIn: 'root'
})
export class AddAppiontmentService {

  // Inject Repository in the constructor
  constructor(private appointmentRepositoryService:AppointmentRepositoryService) { }

  // call the repository to get,post and put the data
}
