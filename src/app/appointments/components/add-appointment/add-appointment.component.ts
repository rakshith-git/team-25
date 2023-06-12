import { Component, OnInit } from "@angular/core";
import { Appointment } from "../../models/Appointment";
import { HttpClient } from "@angular/common/http";
import { AddAppointment } from "../../models/AddAppointment";
import { AddAppointmentService } from "../../services/add-appointment.service";
import { Form, NgForm } from "@angular/forms";
import {FormsModule} from '@angular/forms'
import { TouchSequence } from "selenium-webdriver";
import { async } from "rxjs";

@Component({
  selector: "app-add-appointment",
  templateUrl: "./add-appointment.component.html",
  styleUrls: ["./add-appointment.component.css"],
})
export class AddAppointmentComponent implements OnInit {
  // Variable declaration and initialization
  // Dependency Injection inside constructor
  validateClinic(clinicName : string) {
    this.service.getClinicByName(clinicName);
  }

  appointmentDate !: string;
  appointmentTime !: string;
  clinicName !: string;
  clinics : any;
  pets : any;
  vets : any;
  petObject = {
    "petId": 0,
    "petName": " ",
    "petAge": "0",
    "petStatus": true,
    "parentFName": " ",
    "parentLName": " ",
    "parentEmailId": " ",
    "parentPhoneNumber": " ",
    "state": " ",
    "country": " ",
    "city": " ",
    "pincode": 0,
    "avatar": null,
    "biography": null,
    "petGender": null,
    "breed": null
};
  vetObject  =     {
    "npiNo": "",
    "userName": "",
    "firstName": "",
    "lastName": "",
    "avatar": "",
    "department": " ",
    "dob": "",
    "gender": "",
    "clinic": "",
    "mobileNo": 0,
    "email": "",
    "address": "",
    "city": "",
    "state": "",
    "country": "",
    "status": false,
    "shortBiography": "",
    // Use department ID to fetch the department
    "departmentId": 0
  }
  clinicObject = {
    "clinicId": 0,
    "clinicName": "",
    "clinicInfo": "",
    "location": "",
    "phoneNumber": "",
    "timings": "",
    "description": "",
    "status": ""
};
  clinicTime : any;
  appointments : any;
  message : any;

  constructor(private service: AddAppointmentService) {

    // Appointments must contain only those which have status of "approved"
  }

  ngOnInit(): void {
    this.service.getAllClinics().subscribe(
      clinics => {
        this.clinics = clinics;
  });
    this.service.getAllPets().subscribe(
      pets => {
        this.pets = pets;
        console.log("++++ pets",this.pets);

      }
    );
    this.service.getAllVets().subscribe(
      vets => {
        this.vets = vets;
        console.log("++++ vets",this.vets);
      }
    )
    this.service.getAllAppointments().subscribe(
      appointments => {
        this.appointments = appointments;
      });
  }


  // Logic for the submit
  onSubmit(data: any) {
    // Validate the time\
    console.log("Submitted");
    let isValidDate = this.validateDate(data.date);
    if (!isValidDate) {
      return;
    }
    // Validate if the pet exists within the pet database [By ID]

    // Validate if the vet exists within the vet database

    // Validate if the clinic is open for the given appointment time
    console.log(data.clinicName);
    // try {
    //   let clinicDto = this.service.getClinicByName(data.clinicName);
    // }
    // catch(ex) {
    //   alert("Clinic not found : ERR 01");
    // }


    // Fetch the deptName from the vet DTO

    // Fetch the clinic name from the pet dto

    // Fetch the parent name, phone number and email from the pet dto

    // Add appointment is the data object collected from the form
    this.service.embedAppointmentData(data);

    // Map the data from the AddAppointment to the Appointment object
    // data : this.service.getAllAppointments();
    // console.log( "DAtaaaaa    "  + data);

    // Appointments must contain only the list of "Approved" appointments
  }



  validateDate(date: string): boolean {
    // Validate the date(Must be within 10 days from the current date)
    var today = new Date();
    var appointmentDateString: string = date;
    var appointmentDate = new Date(appointmentDateString);
    console.log(appointmentDate);

    if (appointmentDate < today) {
      // Display that appointment date must be ahead of the current date or equal to the current date
      // If the appointment date is today, the appointment time cannot be earlier than the local time
      alert("Invalid appointment date");
      return false;
    }
    var timeDiff = appointmentDate.getTime() - today.getTime();
    var dayDiff = timeDiff / (1000 * 3600 * 24);
    console.log("DAYDIFF : " + dayDiff);

    if (dayDiff > 2) {
      // Display the error message
      alert("Invalid Appointment Date : Appointment date must be within two days of the current local date: " + appointmentDate);
      return false;
    }
    return true;
  }

  // Format from the clinic team : HH:MM - HH:MM
  validateTime(appointmentTime : string, clinicTime : string): boolean {
    // Extract the opening time
    // Dummy clinic timing [in 24 hours format]
    clinicTime = this.clinicObject.timings;
    console.log(clinicTime);
    if (Date.parse('01/01/2011 ' + appointmentTime) < Date.parse('01/01/2011 ' + clinicTime.slice(0,5))) {
      alert("The clinic is closed " + "TIMINGS : " + this.clinicObject);
    }
    // Extract the closing time
    else if (Date.parse('01/01/2011 ' + appointmentTime) > Date.parse('01/01/2011 ' + clinicTime.slice(8,13))) {
      alert("The clinic is yet to open");
    }

    return true;
  }
  validateIfAppointmentAlreadyBooked(appointmentTime : string, appointmentDate : string) {
    for (let i = 0; i < this.appointments.length; i++) {
      let appointmentBookedDate = this.appointments[i].date;
      // Appointment has to be checked for the particular vet
      if (appointmentBookedDate == appointmentDate && this.appointments[i].vetDetails.vetName == this.vetObject.userName) {
        // Check the time difference between the two dates in seconds
        let appointmentBookedTime = this.appointments[i].time;
        // Create a dummy date to compute the time difference
        var secondBetweenTwoDate = Math.abs((new Date('01/01/2011 ' + appointmentBookedTime).getTime() - new Date('01/01/2011 ' + appointmentTime).getTime()) / 1000);
        var minutesDifference = secondBetweenTwoDate/60;
        if (minutesDifference < 30) {
          alert("Appointment cannot be scheduled, another appointment is already scheduled");
          return;
        }
      }


    }
  }

}
