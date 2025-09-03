import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from '../../core/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = url + '/auth';

  constructor(private http: HttpClient) { }
  
  register(registerData: any) : Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, registerData);
  }

  login(loginData: any) : Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, loginData);
  }
}
