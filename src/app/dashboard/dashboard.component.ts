import { Component } from '@angular/core';
import { MyappService } from '../myapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  jsonData:any[]=[];
  
    
    constructor(private serviceobj:MyappService,private router:Router){

    }
    ngOnInit(): void {
      this.serviceobj.getData().subscribe((data) => {
        this.jsonData = data;
      });
    }

}
