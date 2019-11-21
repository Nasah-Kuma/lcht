import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Interfaces/Users/new-user';
import { LoginService } from 'src/app/Services/UserServices/login.service';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
// import { NgForm} from '@angular/forms';
import { RegisterService} from '../../../Services/UserServices/register.service';
// import { Validator} from '../../../Components/UtilityComponents/HelperClasses/authValidators';
import { tokenName } from '@angular/compiler';
import { UserInputLength } from '../../UtilityComponents/HelperClasses/userInputLengths'; 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public userCategory : any;
  
  signupForm :FormGroup;
  newLyCreatedStudent : User;
  shortName : boolean = false;
  longName : boolean = false;
  
  constructor( private registerMeService : RegisterService){}

  ngOnInit() {
    this.signupForm = new FormGroup({
      username : new FormControl(null),
      password : new FormControl(null),
      Kpassword : new FormControl(null),
      phone : new FormControl(null),
      email : new FormControl(null),
      academicLevel : new FormControl(null),
      businessCategory : new FormControl(null),
      developmentField : new FormControl(null)
    })
    this.userCategory = JSON.parse(localStorage.getItem("chosenCategory"));
  }

  onSubmit(){
    console.log(this.signupForm);
    let newStudent : any = {
      username : [this.signupForm.value.username, [Validators.required, 
                  Validators.minLength(UserInputLength.MIN_USERNAME_LENGTH)]],
      password : [this.signupForm.value.password, Validators.required],
      email : this.signupForm.value.email,
      phone : this.signupForm.value.phone,
      academicLevel : [this.signupForm.value.academicLevel, Validators.required]
    }

    let newDeveloper : any = {
     username : [this.signupForm.value.username, [Validators.required]],
     password : [this.signupForm.value.password, Validators.required],
     email : [this.signupForm.value.email, Validators.required],
     phone : [this.signupForm.value.phone],
     developmentField : [this.signupForm.value.developmentField, Validators.required]
     }

    let newBusinessman : any = {
     username : [this.signupForm.value.username, Validators.required],
     password : [this.signupForm.value.password, Validators.required],
     email : [this.signupForm.value.email, Validators.required],
     phone : [this.signupForm.value.phone],
     businessCategory : [this.signupForm.value.businessCategory]
     }

    this.registerMeService.createStudent(newStudent)
    .subscribe(data=>{
      this.newLyCreatedStudent = data;
      let token = data.token;
      localStorage.setItem("token",token);
      console.log(token);
      console.log(data);
    })
  }

//   get userName(){
//     return this.signupForm.get('username');
//   }
//   get pwd(){
//     return this.signupForm.get('password');
//   }
//   get emailAddress(){
//     return this.signupForm.get('email');
//   }
 }
