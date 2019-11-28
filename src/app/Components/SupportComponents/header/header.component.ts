import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../Services/UserServices/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchSpace: boolean = false;
  @Input() public newUser;
  tabLinks = [
    {
      path: 'chat',
      label: 'chat'

    },
    {
      path: 'status',
      label: 'status'

    },
    {
      path: 'calls',
      label: 'Calls'

    },
    {
      path: 'info',
      label: 'Vibes'

    },
  ];

  constructor(private router: Router, private logOutService: LoginService) { }

  chat() {
    this.router.navigate['chat'];
  }
  status() {

  }
  info() {
    this.router.navigate['status'];
  }

  ngOnInit() {
  }
  showSearchSpace() {
    return this.searchSpace = true;
  }
  closeSearchBar() {
    return this.searchSpace = false;
  }

  // function that logs user out
  logOut(){
    let logout = confirm("Are you sure you want to logout?");
    if(logout){
      this.logOutService.setUserLogOut()
      .subscribe(loggedStatus => {
        console.log(loggedStatus);
        this.router.navigate(['/login'])
      })
    }
    console.log(logout);
  }
}
