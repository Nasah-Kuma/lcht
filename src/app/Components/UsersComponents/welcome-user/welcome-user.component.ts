import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {

  public registeredUser: any;
  public token: any;
  constructor() { }

  // stores token of authenticated user on component init
  ngOnInit() {
    this.token = JSON.parse(localStorage.getItem('token'));
    this.registeredUser = JSON.parse(localStorage.getItem('username'));
  }

}
