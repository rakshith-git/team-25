import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';

import { AllAppointmentsComponent } from './appointments/components/all-appointments/all-appointments.component';
import { AddAppointmentComponent } from './appointments/components/add-appointment/add-appointment.component';
import { DoctorsComponent } from './vets/components/doctors/doctors.component';
import { AddDoctorComponent } from './vets/components/add-doctor/add-doctor.component';
import { DoctorInfoComponent } from './vets/components/doctor-info/doctor-info.component';
import { EditDoctorComponent } from './vets/components/edit-doctor/edit-doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AngularFireModule } from '@angular/fire'
import { HeaderComponent } from './shared/header/header.component';

import { AddPetsComponent } from './pets/components/add-pets/add-pets.component';
import { PetsComponent } from './pets/components/pets/pets.component';
import { ClinicInformationComponent } from './clinics/components/clinic-information/clinic-information.component';
import { AddClinicComponent } from './clinics/components/add-clinic/add-clinic.component';
import { AddDepartmentsComponent } from './department/components/add-departments/add-departments.component';
import { DepartmentsComponent } from './department/components/departments/departments.component';
import { AdminDashboardComponent } from './dashboard/components/admin-dashboard/admin-dashboard.component';
import { AddScheduleComponent } from './schedule/components/add-schedule/add-schedule.component';
import { ScheduleComponent } from './schedule/components/schedule/schedule.component';

import { HttpClientModule  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VerifyEmailComponent } from './shared/verify-email/verify-email.component';
import { EditPetComponent } from './pets/components/edit-pet/edit-pet.component';
import { PetInfoComponent } from './pets/components/pet-info/pet-info.component';

@NgModule({
  declarations: [
    ClinicInformationComponent,
    AppComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    AllAppointmentsComponent,
    AddAppointmentComponent,
    DoctorsComponent,
    AddDoctorComponent,
    DoctorInfoComponent,
    EditDoctorComponent,
    AddPetsComponent,
    ScheduleComponent,
    AddScheduleComponent,
    DepartmentsComponent,
    AddDepartmentsComponent,
    HeaderComponent,
    AddClinicComponent,
    AddPetsComponent,
    PetsComponent,
    EditPetComponent,
    PetInfoComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
