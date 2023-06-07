import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { vetDetails } from '../../models/vet-details';
import { AddVetService } from '../../services/add-vet.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {

  vetInfo: any
  appointmentInfo: any
  DateSelected: any;
  saveDateSelected: any;
  finalList: any
  list: any = [];
  AllAppointments: any


  //to hide and show appointment
  Show:boolean=false;
  visible:boolean=false
  constructor(private activeRoute: ActivatedRoute, private vet: AddVetService) {
  }



  ngOnInit(): void {

    let npiNo = this.activeRoute.snapshot.paramMap.get('npiNo');
    console.warn(npiNo);
    npiNo && this.vet.getVetInfoById(npiNo).subscribe((result => {
      console.warn(result);
      this.vetInfo = result;

    }))

    let userName = this.activeRoute.snapshot.paramMap.get('userName');
    console.log(userName);
    userName && this.vet.getAppointmentByName(userName).subscribe((result1 => {
      console.warn(result1);
      this.appointmentInfo = result1;
    }))
  }

  fetchDateSelected() {
    console.log("date selected: " + this.DateSelected);
    this.saveDateSelected = this.DateSelected;
  }

  public getDateSelected() {
    this.list = [];
    for (let i = 0; i < this.appointmentInfo.length; i++) {
      var item = this.appointmentInfo[i].date;

      if (item == this.DateSelected) {

        this.finalList = this.appointmentInfo[i];
        console.log("Date matching")
        this.list.push(this.finalList);
      }
    }
  }

  display(){
    this.Show=!this.Show;
    this.visible=!this.visible;
  }
}
