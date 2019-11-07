import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthenticationGuard } from './Guards/authentication.guard';
import { InfoComponent } from './info/info.component';
import { StatusComponent } from './status/status.component';
import { ChatroomComponent } from './Components/ChatComponents/chatroom/chatroom.component';
import { LoginComponent } from './Components/UsersComponents/login/login.component';
import { RegistrationComponent } from './Components/UsersComponents/registration/registration.component';
import { GroupchatsComponent } from './Components/ChatComponents/groupchats/groupchats.component';
import { PrivatechatsComponent } from './Components/ChatComponents/privatechats/privatechats.component';
import { NotificationsComponent } from './Components/SupportComponents/notifications/notifications.component';
import { CallsComponent } from './Components/UtilityComponents/BasicUtilities/calls/calls.component';



const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'chat',
    canActivate: [AuthenticationGuard],
    component: ChatroomComponent
  },
  {
    path: 'groups',
    canActivate: [AuthenticationGuard],
    component: GroupchatsComponent
  },
  {
    path: 'privateChats',
    canActivate: [AuthenticationGuard],
    component: PrivatechatsComponent
  },
  {
    path: 'notifications',
    canActivate: [AuthenticationGuard],
    component: NotificationsComponent
  },
  {
    path: 'status',
    canActivate: [AuthenticationGuard],
    component: StatusComponent
  },
  {
    path: 'info',
    canActivate: [AuthenticationGuard],
    component: InfoComponent
  },
  {
    path: 'calls',
    canActivate: [AuthenticationGuard],
    component: CallsComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
