import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-pets',
  templateUrl: './edit-pets.component.html',
  styleUrls: ['./edit-pets.component.css']
})
export class EditPetsComponent implements OnInit {

  petUpdate ={
   parentName: String,
   parentEmailId: String,
   petName:String,
   petAge: String,
   street: String,
   state: String,
   country: String,
   city: String,
    }
  constructor() { }

  ngOnInit(): void {
  }

}
