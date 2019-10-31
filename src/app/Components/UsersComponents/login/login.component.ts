import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { $$ } from 'protractor';

import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/UserServices/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private users = [];
  public loading = false;

  constructor(private isLogged: LoginService, private route: Router) { }

  ngOnInit() {

    this.isLogged.getUsers()
      .subscribe(allUsers => this.users = allUsers);
    console.log(this.users);

    $(() => {
      $('input:text').focusin(() => {
        $('#next').removeAttr('disabled');
      });

      $('input:text').focusout(() => {
        $('#next').attr('disabled');
      });

      $('#next').click((e) => {

        e.preventDefault();
        console.log(this.users);

        const username = $('input:text').val();
        const password = $('input:password').val();
        for (let i = 0; i < this.users.length; i++) {

          if (username === this.users[i].username && password === this.users[i].password) {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.isLogged.setUserLogin(this.users[i].username);
              this.isLogged.username = this.users[i].username;
              this.route.navigate(['/chat']);
            }, 1000);

            return;
          }
        }
        alert('Wrong Username of Password');
      });
    });
  }
}
