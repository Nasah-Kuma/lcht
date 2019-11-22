import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../MaterialModule/material.module';
import { SupportModule} from '../SupportModule/support.module';
import { LoginComponent } from '../../Components/UsersComponents/login/login.component';
import { RegistrationComponent } from '../../Components/UsersComponents/registration/registration.component';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SupportModule
  ],
  exports: [
    LoginComponent, RegistrationComponent
  ]
})
export class UsersModule { }
