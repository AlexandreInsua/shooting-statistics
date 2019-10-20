import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ShootingsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Request-Method':'GET',
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  constructor(private http: HttpClient) { }

  getShootings(){
    let url = 'http://api-tiro.local/tiradas';
    console.log('PETICIÓN CONTRA URL ', url)
    return this.http.get<any>(url);
  }
}
