import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './appointments/components/add-appointment/add-appointment.component';

import { AllAppointmentsComponent } from './appointments/components/all-appointments/all-appointments.component';

import { ClinicInformationComponent } from './clinics/components/clinic-information/clinic-information.component';
import { AddClinicComponent } from './clinics/components/add-clinic/add-clinic.component';



import { AddPetsComponent } from './pets/components/add-pets/add-pets.component';
import { PetsComponent } from './pets/components/pets/pets.component';

import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { AddDoctorComponent } from './vets/components/add-doctor/add-doctor.component';
import { DoctorsComponent } from './vets/components/doctors/doctors.component';
import { DoctorInfoComponent } from './vets/components/doctor-info/doctor-info.component';
import { EditDoctorComponent } from './vets/components/edit-doctor/edit-doctor.component';
import { AddDepartmentsComponent } from './department/components/add-departments/add-departments.component';
import { DepartmentsComponent } from './department/components/departments/departments.component';
import { AdminDashboardComponent } from './dashboard/components/admin-dashboard/admin-dashboard.component';
import { AddScheduleComponent } from './schedule/components/add-schedule/add-schedule.component';
import { ScheduleComponent } from './schedule/components/schedule/schedule.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './shared/verify-email/verify-email.component';
import { PetInfoComponent } from './pets/components/pet-info/pet-info.component';
import { EditPetComponent } from './pets/components/edit-pet/edit-pet.component';

const routes: Routes = [
  {path: '', redirectTo:'/vets',pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'verify-email', component:VerifyEmailComponent},
  {path: 'forgotPassword', component:ForgotPasswordComponent},

  {path: 'allAppointments', component:AllAppointmentsComponent},
  {path: 'dashboard', component:AdminDashboardComponent},
  {path: 'addAppointments', component:AddAppointmentComponent},

  {path: 'vets', component:DoctorsComponent},
  {path: 'addVets', component:AddDoctorComponent},
  {path: 'vetInfo/:npiNo/:userName', component:DoctorInfoComponent},
  {path:'editInfo/:npiNo',component:EditDoctorComponent},


  {path: 'pets', component:PetsComponent},
  {path: 'addPets', component:AddPetsComponent},

  {path: 'schedule', component:ScheduleComponent},
  {path: 'addSchedule', component:AddScheduleComponent},

  {path: 'departments', component:DepartmentsComponent},
  {path: 'addDepartment', component:AddDepartmentsComponent},

  {path: 'clinic', component:ClinicInformationComponent},
  {path: 'addClinic', component:AddClinicComponent},
  {path: 'petInfo/:petId', component:PetInfoComponent},
  {path: 'editpet/:petId', component:EditPetComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
