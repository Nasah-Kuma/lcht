import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from '../../Interfaces/Users/new-user';
import { catchError, retry} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http: HttpClient) { }
  
  headerOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  //adds a new student 
  createStudent(newStudent:User){
    let studentData : User = {
      username : newStudent.username[0],
      password : newStudent.password[0],
      phone : newStudent.phone,
      email : newStudent.email,
      academicLevel : newStudent.academicLevel[0]

    }
    // console.log(studentData.username);
    

    return this.http.post<any>('https://liachat-2.herokuapp.com/api/user/register',studentData, this.headerOptions)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

   handleError(error:HttpErrorResponse){
     console.log('error occured');
     return throwError(error);

   }
}
