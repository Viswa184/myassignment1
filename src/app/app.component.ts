import { Component } from '@angular/core';
import { Router,Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home Page';

  constructor(private router:Router){

  }
  dashboardClick(){
    this.router.navigate(['Dashboard']);
  }

  loginClick(){
    this.router.navigate(['Login']);
  }
  registrationClick(){
    this.router.navigate(['Registration']);
  }
}
