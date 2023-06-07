import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicsRoutingModule } from './clinics-routing.module';
import { ClinicInformationComponent } from './components/clinic-information/clinic-information.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { EmailSettingsComponent } from './components/email-settings/email-settings.component';


@NgModule({
  declarations: [


    
  ],
  imports: [
    CommonModule,
    ClinicsRoutingModule
  ]
})
export class ClinicsModule { }
