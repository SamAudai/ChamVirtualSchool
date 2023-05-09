import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from "../shared/baseurl";
import { Observable } from 'rxjs';

//const AUTH_API = 'https://localhost:7112/api/students';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(eMail: string, password: string): Observable<any> {
    return this.http.post(
      baseURL + 'students',
      {
        eMail,
        password
      },
      httpOptions
    );
  }

  register(firstName: string, lastName: string, birthDate:string, eMail: string, password: string): Observable<any> {
    return this.http.post(
      baseURL + 'signup',
      {
        firstName,
        lastName,
        eMail,
        birthDate,
        password
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(baseURL + 'signout', { }, httpOptions);
  }

}
