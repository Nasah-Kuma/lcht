import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../MaterialModule/material.module';
import { SupportModule} from '../SupportModule/support.module';
import { LoginComponent } from '../../Components/UsersComponents/login/login.component';
import { RegistrationComponent } from '../../Components/UsersComponents/registration/registration.component';
import { WelcomeUserComponent } from '../../Components/UsersComponents/welcome-user/welcome-user.component';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent, WelcomeUserComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SupportModule,
    RouterModule
  ],
  exports: [
    LoginComponent, RegistrationComponent, WelcomeUserComponent
  ]
})
export class UsersModule { }
