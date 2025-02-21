import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-landingheader',
  templateUrl: './landingheader.component.html',
  styleUrls: ['./landingheader.component.css']
})
export class LandingheaderComponent implements OnInit {

  public userCategory = ['student', 'developer', 'businessman'];
  public selectedCategory:any;
  @Output() public categoryEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onClickCategory(e){
    this.categoryEvent.emit(e.target.textContent);
    console.log(e);
    
    // localStorage.setItem("chosenCategory", JSON.stringify(this.selectedCategory));
  }
}