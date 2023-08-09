import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  users = [
    { name: 'Kolli Mahanth', age: 35, sapid:12345},
    { name: 'Jyothi Swaroop', age: 12, sapid:134435 },
    { name: 'Subhash Krishna', age: 22, sapid:137445 },
    { name: 'Akula lokesh', age: 22, sapid:13735 }
  ];
}
