import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { AddVetService } from '../../services/add-vet.service';
import { vetDetails } from '../../models/vet-details';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit {
  idNo: any;
  vetDetails: vetDetails[] | undefined;
  message: any;

  list: boolean = false;
  card: boolean = true;

  Show: boolean = false;
  visible: boolean = false;
  msg: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private vetService: AddVetService
  ) {}

  ngOnInit(): void {
    this.getAllVetDetails();
  }

  // method to delete the vet from the application.
  // and code to get the confirmation from user by showing an alert message.
  deleteId(id: number) {
    let deletePost = confirm('Are you sure you want to delete...?');
    if (deletePost) {
      let profile = this.vetService.deleteVetInfo(id);
      profile.subscribe((data) => (this.message = data));
      console.log(profile);

      alert('Successfully deleted the post');
    } else {
      alert('Error deleting');
    }
    window.location.reload();
  }

  lists() {
    this.list = !this.list;
    this.card = !this.card;
  }
  cards() {
    this.card = !this.card;
    this.list = !this.list;
  }

  display() {
    this.Show = !this.Show;
    this.visible = !this.visible;
  }


  // method to deactivate the vet from the application.
  // and code to get the confirmation from user, by showing an alert message.
  deactivateVets(id: number) {
    let vetDeactivate = confirm('Are you sure you want to deactivate?');
    if (vetDeactivate) {
      let VetDetails = this.vetService.deactivateVets(id);
      VetDetails.subscribe((data) => (this.msg = data));
      console.log(VetDetails);
      alert('Successfully deactivated the vet');
    } else {
      alert('Error occured while deactivating');
    }
    window.location.reload();
  }

  // Method to get all the vet details
  getAllVetDetails() {
    this.vetService.getVetInfo().subscribe({
      next: (resp: any) => {
        console.log('Vets details', resp);
        this.vetDetails = resp;
      },
      error: (err: any) => {
        console.log('error while getting dropdown list from api', err);
      },
    });
  }
}
