import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../Components/SupportComponents/header/header.component';
import { MaterialModule } from '../MaterialModule/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NotificationsComponent } from '../../Components/SupportComponents/notifications/notifications.component';
import { LandingheaderComponent } from '../../Components/SupportComponents/landingheader/landingheader.component';

@NgModule({
  declarations: [HeaderComponent, NotificationsComponent, LandingheaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    LandingheaderComponent
  ]
})
export class SupportModule { }
