import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../MaterialModule/material.module';
import { LoginComponent } from '../../Components/UsersComponents/login/login.component';
import { RegistrationComponent } from '../../Components/UsersComponents/registration/registration.component';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    LoginComponent, RegistrationComponent
  ]
})
export class UsersModule { }
