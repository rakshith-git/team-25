import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddPetsService } from '../../services/add-pets.service';
import { petDetails } from '../../models/pet-details';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

petInfo:any
constructor(private activeRoute:ActivatedRoute,private pet:AddPetsService) { }
ngOnInit(): void {
  let petId=this.activeRoute.snapshot.paramMap.get('petId');
  console.log(petId);
  petId && this.pet.getPetInfoById(petId).subscribe((result => {
    console.log(result);
    this.petInfo=result;
  }))
}
  }
