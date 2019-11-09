import { Injectable } from '@angular/core';
import { 
  HttpClient, 
  HttpHeaders
} from '@angular/common/http';

import { Observable, Operator } from 'rxjs';
import { map } from 'rxjs/operators';

import { AllUsers } from '../../Interfaces/Users/all-users';
import { Student } from '../../Interfaces/Users/new-user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedIn;
  public username;

  constructor(private http: HttpClient) {
  }
 
  // validates a user that wants to logIn to the system
  validateUser(studentInfo: Student): Observable<Student> {
    // assigns value gotten from logIn form to user
    let student : Student = {
      username: studentInfo.username,
      password: studentInfo.password
    }

    const headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Student>('https://liachat-2.herokuapp.com/api/user/login', student, headerOptions);
  }

  // Setting User to LogIn state
  setUserLogin(name) {
    this.loggedIn = true;
    localStorage.setItem('LoggedIn', this.loggedIn);
    localStorage.setItem('name', name.toString());
  }

  // Setting User to Logout state
  setUserLogOut() {
    this.loggedIn = false;
    localStorage.clear();
  }

  // Verifying if user is logged in
  getUserIsLogged(): boolean {
    return JSON.parse(localStorage.getItem('LoggedIn') || 'false');
  }


}
