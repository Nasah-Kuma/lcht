import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/Interfaces/Users/new-user';
import { LoginService } from 'src/app/Services/UserServices/login.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { NgForm} from '@angular/forms';
import { RegisterService } from '../../../Services/UserServices/register.service';
// import { Validator} from '../../../Components/UtilityComponents/HelperClasses/authValidators';
import { tokenName } from '@angular/compiler';
import { UserInputLength } from '../../UtilityComponents/HelperClasses/userInputLengths';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // public userCategory : any = JSON.parse(localStorage.getItem("chosenCategory"));


  signupForm: FormGroup;
  newLyCreatedStudent: User;
  public categoryEmitted: any;
  shortName: boolean = false;
  longName: boolean = false;
  Student: boolean = false;
  Developer: boolean = false;
  BusinessMan: boolean = false;

  constructor(private registerMeService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
      Kpassword: new FormControl(null),
      phone: new FormControl(null),
      email: new FormControl(null),
      academicLevel: new FormControl(null),
      businessCategory: new FormControl(null),
      developmentField: new FormControl(null)
    })
    // this.userCategory = JSON.parse(localStorage.getItem("chosenCategory"));
    // console.log(this.userCategory);
    this.getCategoryEmitted('student');

  }

  // function that gets emitted category from child
  getCategoryEmitted(category){
    console.log(typeof category);
    this.categoryEmitted = category;
    if (category.trim() === "student") {
      this.BusinessMan = false;
      this.Developer = false;
      this.Student = true;
    }else{
      if (category.trim() === 'developer') {
        this.Student = false;
        this.BusinessMan = false;
        this.Developer = true;  
      }else{
        if (category.trim() === 'businessman') {
          this.Developer = false;
          this.Student = false;
          this.BusinessMan = true;
        }
      }
    }
  }

  onSubmit() {
    console.log(this.signupForm);
    let newStudent: any = {
      username: [this.signupForm.value.username, [Validators.required,
      Validators.minLength(UserInputLength.MIN_USERNAME_LENGTH)]],
      password: [this.signupForm.value.password, Validators.required],
      email: this.signupForm.value.email,
      phone: this.signupForm.value.phone,
      academicLevel: [this.signupForm.value.academicLevel, Validators.required]
    }

    let newDeveloper: any = {
      username: [this.signupForm.value.username, [Validators.required]],
      password: [this.signupForm.value.password, Validators.required],
      email: [this.signupForm.value.email, Validators.required],
      phone: [this.signupForm.value.phone],
      developmentField: [this.signupForm.value.developmentField, Validators.required]
    }

    let newBusinessman: any = {
      username: [this.signupForm.value.username, Validators.required],
      password: [this.signupForm.value.password, Validators.required],
      email: [this.signupForm.value.email, Validators.required],
      phone: [this.signupForm.value.phone],
      businessCategory: [this.signupForm.value.businessCategory]
    }

    this.registerMeService.createStudent(newStudent)
      .subscribe(data => {
        this.newLyCreatedStudent = data;
        let token = data.token;
        if(token){
          localStorage.setItem("token", JSON.stringify(token));
          const registeredUser = data.registeredStudent[0].username;
          localStorage.setItem("username", JSON.stringify(registeredUser));
          this.router.navigate(['/welcomeUser']) ;
        }
        
        console.log(token);
        console.log(data);
        console.log(data.registeredStudent[0].username);
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
