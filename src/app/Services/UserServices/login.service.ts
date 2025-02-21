import { Injectable } from '@angular/core';
import { 
  HttpClient, 
  HttpHeaders
} from '@angular/common/http';

import { Observable, Operator, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AllUsers } from '../../Interfaces/Users/all-users';
import { User } from '../../Interfaces/Users/new-user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedIn;
  public username;
  errorData: {};

  constructor(private http: HttpClient) {
  }
  
 
     headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

  redirectUrl: string;
  // validates a user that wants to logIn to the system
  validateUser(userInfo: User): Observable<User> {
    // assigns value gotten from logIn form to user
    let user : User = {
      username: userInfo.username,
      password: userInfo.password
    }

    return this.http.post<User>('https://liachat-2.herokuapp.com/api/user/login', user, this.headerOptions);
  }

  // Setting User to LogIn state
  setUserLogin(name) {
    this.loggedIn = true;
    localStorage.setItem('LoggedIn', this.loggedIn);
    localStorage.setItem('name', name.toString());
  }

  // Setting User to Logout state
  setUserLogOut() {
    return this.http.post< any >('https://liachat-2.herokuapp.com/api/user/logOut', this.headerOptions);
  }

  // Verifying if user is logged in
  getUserIsLogged(): boolean {
    return JSON.parse(localStorage.getItem('LoggedIn') || 'false');
  }


}
