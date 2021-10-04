import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   userExists!:boolean

  constructor(private userService : UserService){}

  ngOnInit(): void {
    // this.userExists = this.userService.getUserId()!==undefined;
    this.userExists =  localStorage.getItem('user') !== null;
  }
  isCollapsed = false;
}
