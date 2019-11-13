import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Interfaces/Users/new-user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http: HttpClient) { }

  //adds a new student 
  createStudent(newStudent:User){
    let studentData : User = {
      username : newStudent.username,
      password : newStudent.password,
      phone : newStudent.phone,
      email : newStudent.email,
      academicLevel : newStudent.academicLevel

    }
    return this.http.post<User>('https://liachat-2.herokuapp.com/api/user/register',studentData);
  }
}
