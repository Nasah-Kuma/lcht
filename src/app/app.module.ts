import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { from } from 'rxjs';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { ChatModule } from './Modules/ChatModule/chat.module';
import { MaterialModule } from './Modules/MaterialModule/material.module';
import { UsersModule } from './Modules/UsersModule/users.module';
import { LoginService } from './Services/UserServices/login.service';
import { SupportModule } from './Modules/SupportModule/support.module';
import { InfoComponent } from './info/info.component';
import { AuthenticationGuard } from './Guards/authentication.guard';
import { BasicUtilitiesModule } from './Modules/UtilitiesModule/basic-utilities/basic-utilities.module';


const config: SocketIoConfig = { url: 'http://localhost:4000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    MaterialModule,
    UsersModule,
    ChatModule,
    SupportModule,
    BasicUtilitiesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LoginService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
