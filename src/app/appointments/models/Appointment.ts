import { PetDetails } from "./PetDetails";
import { VetDto } from "./vetAppointmentDTo";

export class Appointment{
  constructor(
  public appointmentId : string,
  // public petDetails : PetDetails,
  // public vetDetails : VetDto,
  public date : string,
  public time : string,
  public moreDetails : string,
  public documents : string,
  public appointmentStatus : string,
  public status : boolean,
  public petId : string,
  public vetId : string,
  public clinicName  :string
  )
  {}
}
