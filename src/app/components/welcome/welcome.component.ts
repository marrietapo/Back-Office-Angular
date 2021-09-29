import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {


  tabs = [
    {
      name: 'Loguearme',
      icon: 'arrow'
    },
    {
      name: 'Registrarme',
      icon: 'arrow'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
