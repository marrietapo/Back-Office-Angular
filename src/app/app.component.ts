import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LocalStorageService } from './services/local-storage.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   userExists!:boolean

  constructor(private localStorageService : LocalStorageService){}

  ngOnInit(): void {
    this.userExists = this.localStorageService.getLocalStorageUserId() !== undefined;
  }
  isCollapsed = false;
}
