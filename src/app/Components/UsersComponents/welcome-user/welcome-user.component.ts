import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {

  @Input() public registeredUser: any;
  public token: any;
  constructor() { }

  ngOnInit() {
    this.token = JSON.parse(localStorage.getItem('token'));
    this.registeredUser = JSON.parse(localStorage.getItem('username'));
  }

}
