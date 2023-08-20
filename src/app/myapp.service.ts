import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyappService {

  constructor(private http: HttpClient,private router:Router) {

   }

  Url='http://localhost:3000/item';

  getData(): Observable<any> {
    return this.http.get<any[]>(this.Url);
  }


}
