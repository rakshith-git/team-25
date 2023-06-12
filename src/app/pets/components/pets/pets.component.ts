import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { petDetails } from '../../models/pet-details';
import { AddPetsService } from '../../services/add-pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  petId!: number ;
  petList: any;
  petCard: any = [];
  petAge!: number;
  parentName!: string;
  parentEmailId!: string;
  parentPhoneNumber!: string;
  biography!: string;
  state!: string;
  country!: string;
  city!: string;
  pincode!: number;
  petGender!: string;
  breed!: string;
  message!: string;
  selectedPetID: any | undefined;
  list: boolean = true;
  card: boolean = false;

  constructor(
    private petService: AddPetsService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllPetDetails();
  }

  // method to get all the pet details to show in both list and card view
  getAllPetDetails() {
    this.petService.getPetList().subscribe({
      next: (resp: any) => {
        console.log('Vets details', resp);
        this.petList = resp;
      },
      error: (err: any) => {
        console.log('error while getting dropdown list from api', err);
      },
    });
  }


  // methods to toggle between list and card view in UI
  lists() {
    this.list = !this.list;
    this.card = !this.card;
  }
  cards() {
    this.card = !this.card;
    this.list = !this.list;
  }

  setPetId(petId: any) {
    this.petId = petId;
  }

  // method to delete the pet details by passing the id
  deletePetId(id:string){
    let deletePost = confirm('Are you sure you want to delete?');
    if (deletePost) {
      let profile = this.petService.removePetz(id);
      profile.subscribe((data: any) => (this.message = data));
      console.log(profile);
      alert('Successfully deleted the post');
    } else {
      alert('Error deleting');
    }
    window.location.reload();
  }

  // method to update the petstatus, by passing the status and ID
  updateStatus(petStatus: any, petId: number) {
    if (petStatus == 'Active') {
      petStatus = true;
    } else {
      petStatus = false;
    }
    console.log(petId);
    alert('Updating Pet Status');
    console.log(petStatus);
    this.petService.updatePetStatus(petId).subscribe(
      (result) => {
        window.location.reload();
        console.log(result);
        alert('Pet status updated successfully.');
      },
      (error) => {
        console.log(error);
        console.log('Unable to update the status');
      }
    );
  }
}
