import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { $$ } from 'protractor';

import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/UserServices/login.service';
import { User } from '../../../Interfaces/Users/new-user';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private users = [];
  public loading = false;
  private userLoggedIn : User;

  constructor(private isLogged: LoginService, private route: Router) { }

  ngOnInit() {}

  onSubmit(){
    const username:any = $('input:text').val();
    const password:any = $('input:password').val();
    let userDetails: User = {
      username,
      password
    }

   
    this.isLogged.validateUser( userDetails)
    .subscribe(data=>{
        this.userLoggedIn = data;
        console.log(this.userLoggedIn);
        this.route.navigate(['/welcomeUser']);
    })
  }

  openReg(){
    this.route.navigate(['/register']);
  }

}
