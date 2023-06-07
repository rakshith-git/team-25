import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetInfoComponent } from './components/pet-info/pet-info.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';


@NgModule({
  declarations: [
    PetInfoComponent,
    EditPetComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule
  ]
})
export class PetsModule { }
