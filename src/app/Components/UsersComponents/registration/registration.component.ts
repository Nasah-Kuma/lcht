import { Component, OnInit } from '@angular/core';
import { Student, Developer, BusinessMan } from 'src/app/Interfaces/Users/new-user';
import { LoginService } from 'src/app/Services/UserServices/login.service';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { NgForm} from '@angular/forms';
import { RegisterService} from '../../../Services/UserServices/register.service';
import { Validators} from '../../../Components/UtilityComponents/HelperClasses/authValidators';
import { tokenName } from '@angular/compiler';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signupForm :FormGroup;
  newLyCreatedUser : Student;
  shortName : boolean = false;
  longName : boolean = false;
  
  constructor( private registerMeService : RegisterService){}


  ngOnInit() {
    this.signupForm = new FormGroup({
      username : new FormControl(null),
      password : new FormControl(null),
      phone : new FormControl(null),
      email : new FormControl(null),
      academicLevel : new FormControl(null)
    })
  }
  onSubmit(){
    console.log(this.signupForm);
    let newUser : Student = {
      username : this.signupForm.value.username,
      password : this.signupForm.value.password,
      email : this.signupForm.value.email,
      phone : this.signupForm.value.phone,
      academicLevel : this.signupForm.value.academicLevel

    }
    this.registerMeService.createUser(newUser)
    .subscribe(data=>{
      this.newLyCreatedUser = data;
      let token = data.token;
      localStorage.setItem("token",token);
      console.log(token);
      console.log(data);
    })
  }

  // validating user data
  validateUserName(event){
  let username = event.target.value;
  console.log(username); 
  this.shortName = true;
  if(new Validators().usernameValidator(username)){
  this.shortName = false;
  }
  else{
  }

}
}
