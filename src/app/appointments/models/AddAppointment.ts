export interface AddAppointment {
    //define variable here 
    
    appointmentId : string,
     petDetails : {
         // When we pass the petName, the pet details must be retrieved
    "petId" : string;
    
    "petName" : string;
    "petAge" : string;
    "petGender" : string;
    "petStatus" : boolean;
    "parentName" : string;
    "parentEmailId" : string;
    "parentPhoneNumber" : string;
    "state" : string;
    "city" : string;
    "country" : string;
    "pinCode" : number;
    "avatar" : string;
},  vetDetails :
 {
     // When we pass the vetName the clinicName and speciality must be fetched 
    "vetId" : string; 
    "clinicName" :string;
     "vetName" : string; 
    "speciality" : string; 
}, 
 date : string, 
  time : string, 
   moreDetails : string, 
    documents : string,  
    appointmentStatus : string,
      status : boolean 
}
