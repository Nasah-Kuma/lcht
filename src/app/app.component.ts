import { Component, OnInit } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
import { from } from 'rxjs';
import * as $ from 'jquery';
import { LoginService } from './Services/UserServices/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showHeader: boolean;
  // displayHeader = JSON.parse(localStorage.getItem('username'));
  constructor(private login: LoginService) {
  }
  ngOnInit() {
    this.showHeader = this.login.getUserIsLogged();

  }
}
