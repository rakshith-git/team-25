import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { petDetails } from '../../models/pet-details';
import { AddPetsService } from '../../services/add-pets.service';
import { PetsComponent } from '../pets/pets.component';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css'],
})
export class EditPetComponent implements OnInit {
  updateDetails: petDetails = {
    petId: 0,

    petName: '',
    petAge: '',
    petStatus: true,
    parentFName: '',
    parentLName: '',
    parentEmailId: '',
    parentPhoneNumber: '',
    state: '',
    country: '',
    city: '',
    avatar: '',
    pincode: 0,
    breed: '',
    petGender: '',
    biography: '',
  };
  addForm = new FormGroup({
    petId: new FormControl(''),
    avatar: new FormControl(''),
    petName: new FormControl(''),
    petAge: new FormControl(''),
    petStatus: new FormControl(''),
    parentFName: new FormControl(''),
    parentLName: new FormControl(''),
    parentEmailId: new FormControl(''),
    parentPhoneNumber: new FormControl(''),

    state: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl(''),
    petGender: new FormControl(''),
    breed: new FormControl(''),
    biography: new FormControl(''),
  });

  petId: any;
  updatedProfile: any;
  Displaydata: any;
  petDetails: any;
  petInfo: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private petService: AddPetsService
  ) {}

  ngOnInit(): void {

    // to get the selected pet ID through url, to get all the details with respect to the selected pet ID
    this.petId = this.activeRoute.snapshot.paramMap.get('petId');
    console.log(this.petId);

    // code to get the particular pet details by passing the pet ID
    this.petService.getPetInfoById(this.petId).subscribe((result) => {
      this.petDetails = result;
      console.log(this.petDetails['petId']);

      this.addForm = new FormGroup({
        petId: new FormControl(this.petDetails['petId']),
        petName: new FormControl(this.petDetails['petName']),
        petAge: new FormControl(this.petDetails['petAge']),
        petStatus: new FormControl(this.petDetails['petStatus']),
        parentFName: new FormControl(this.petDetails['parentFName']),
        parentLName: new FormControl(this.petDetails['parentLName']),
        parentEmailId: new FormControl(this.petDetails['parentEmailId']),
        parentPhoneNumber: new FormControl(
          this.petDetails['parentPhoneNumber']
        ),
        state: new FormControl(this.petDetails['state']),
        country: new FormControl(this.petDetails['country']),
        city: new FormControl(this.petDetails['city']),
        pincode: new FormControl(this.petDetails['pincode']),
        biography: new FormControl(this.petDetails['biography']),
        breed: new FormControl(this.petDetails['breed']),
        petGender: new FormControl(this.petDetails['petGender']),
      });
    });
  }

  // method to pass the edited pet details by passing all the form values
  editPet() {
    let profile = this.petService.editPet(this.addForm.value);

    profile.subscribe((data: any) => (this.updatedProfile = data));
    window.location.reload();
    console.log(this.updateDetails);
    window.location.pathname = 'pets';

  }

  // method to get control over the form for the validation purpose
  get petName() {
    return this.addForm.get('petName');
  }
  get parentFName() {
    return this.addForm.get('parentFName');
  }
  get parentLName() {
    return this.addForm.get('parentLName');
  }
  get parentPhoneNumber() {
    return this.addForm.get('parentPhoneNumber');
  }
  get petAge() {
    return this.addForm.get('petAge');
  }
  get parentEmailId() {
    return this.addForm.get('parentEmailId');
  }
  get street() {
    return this.addForm.get('street');
  }
  get state() {
    return this.addForm.get('state');
  }
  get city() {
    return this.addForm.get('city');
  }
  get pincode() {
    return this.addForm.get('pincode');
  }
  get country() {
    return this.addForm.get('country');
  }
  get biography() {
    return this.addForm.get('biography');
  }
  get breed() {
    return this.addForm.get('breed');
  }
  get petGender() {
    return this.addForm.get('petGender');
  }
}
