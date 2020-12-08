import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendorderService {

  constructor(private http: HttpClient) { }

  postOrder(pizzas: any, fullPrice: any, email: any): Observable<any>{
    return this.http.post('http://localhost:3000/sendorder',{
      pizzas: pizzas,
      fullPrice: fullPrice,
      email: email
    });
  }
}
