import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllAppointmentsService } from '../../services/all-appointments.service';


@Component({ 
 selector: 'app-pet-info',
 templateUrl: './pet-info.component.html',
 styleUrls: ['./pet-info.component.css']})

export class PetInfoComponent implements OnInit {
  petInfo:any;
  appointmentinfo:any;
  constructor(private activeRoute:ActivatedRoute ,private allAppointmentsService: AllAppointmentsService) {

    let petId=this.activeRoute.snapshot.paramMap.get('petId')
    console.log(petId);


     this.allAppointmentsService.getPetInfoById(petId).subscribe((result=>{
      this.petInfo=result;
      console.log(this.petInfo);

    }))

    this.appointmentinfo=this.allAppointmentsService.getAllAppointments().subscribe((result=>{
      this.appointmentinfo=result;
    }))
    console.log(this.appointmentinfo);
   }
  ngOnInit(): void {
      }

      
      list:boolean=false;
      card:boolean=true;
    
      lists(){
        this.list =!this.list;
        this.card =!this.card;
      }
      cards(){
        this.card =!this.card;
        this.list =!this.list;
      }
    }
  
