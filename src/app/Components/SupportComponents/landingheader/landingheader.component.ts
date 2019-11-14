import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-landingheader',
  templateUrl: './landingheader.component.html',
  styleUrls: ['./landingheader.component.css']
})
export class LandingheaderComponent implements OnInit {

  public userCategory = ['student', 'developer', 'businessman'];
  public selectedCategory : any;


  constructor() { }

  ngOnInit() {
  }

  giveCategory(event){
    this.selectedCategory = event.target.value;
  }
}
