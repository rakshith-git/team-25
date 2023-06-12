import { Component, OnInit } from '@angular/core';
import { vetDetails } from 'src/app/dashboard/vetDetails';
// import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from '../../dashboard.service';
//import { Appointment } from 'src/app/dashboard/'
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  totalVets: any;

  totalAppointmentCount: any;

  totalPets: any;

  approvedAppointmentsCount: any;

  pendingAppointmentsCount: any;

  cancelledAppointmentsCount: any;

  upcomingAppointments: any;

  completedAppointments: any;

  vetList: any;

  constructor(private api: DashboardService) {
    this.api.getPendingAppointmentsForDashboard().subscribe((result) => {
      this.upcomingAppointments = result;
      console.log(result);
    });
  }

  isListNull(): boolean {
    if (this.pendingAppointmentsCount == 0) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {
    this.api.getTotalPets().subscribe((result) => {
      this.totalPets = result;
      console.log(result);
    });

    this.api.getTotalVets().subscribe((result) => {
      this.totalVets = result;
      console.log(result);
    });

    this.api.gettotalAppointmentCount().subscribe((result) => {
      this.totalAppointmentCount = result;
      console.log(result);
    });

    this.api.getpendingAppointmentsCount().subscribe((result) => {
      this.pendingAppointmentsCount = result;
      console.log(result);
    });

    this.api.getapprovedAppointmentsCount().subscribe((result) => {
      this.approvedAppointmentsCount = result;
      console.log(result);
    });

    this.api.getcancelledAppointmentsCount().subscribe((result) => {
      this.cancelledAppointmentsCount = result;
      console.log(result);
    });

    this.vetList = this.api.getListOfVet().subscribe((result) => {
      this.vetList = result;
      console.log(result);
    });

    this.api.getCompletedAppointments().subscribe((result) => {
      this.completedAppointments = result;
      console.log(result);
    });
  }

  takeUpForAppointment(id: string) {
    this.api.takeUp(id).subscribe();
    console.log(
      this.api
        .gettotalAppointmentCount()
        .subscribe((result) => (this.totalAppointmentCount = result))
    );
  }

  getVetStatus(status: Boolean): string {
    if (status === true) {
      return 'status online';
    } else {
      return 'status offline';
    }
  }
}
