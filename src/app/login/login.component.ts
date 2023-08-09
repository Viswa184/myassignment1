import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){

  }
  username?:string = '';
  password?:string = '';

  login(){
    if (this.username == 'viswa' && this.password == '12345'){
      console.log('login successfull');
      this.router.navigate(['Dashboard']);
    }
    else{
      console.log('Login unsuccessful');
      this.router.navigate(['Login']);
    }
  }
}
