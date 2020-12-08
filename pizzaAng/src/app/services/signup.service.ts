import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  sendSingup(
    user: String,
    pass: String,
    email: String,
    adress: String
  ): Observable<any>{
    return this.http.post('http://localhost:3000/signup',{
      username: user,
      password: pass,
      email: email,
      adress: adress
    });
  }
}
