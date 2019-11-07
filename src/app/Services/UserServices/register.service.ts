import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student, Developer, BusinessMan } from '../../Interfaces/Users/new-user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http: HttpClient) { }

  //adds a new user 
  createUser(newUser:Student){
    let userData : Student = {
      username : newUser.username,
      password : newUser.password,
      phone : newUser.phone,
      email : newUser.email,
      academicLevel : newUser.academicLevel

    }
    return this.http.post<Student>('https://liachat-2.herokuapp.com/api/user/register',userData);
  }
}
