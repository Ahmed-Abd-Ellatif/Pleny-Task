import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, LoginObj } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  // ---------------------------------------
  // Login user and get token
  // ---------------------------------------
  login(obj: LoginObj): Observable<Login> {
    return this._http.post<Login>(`https://dummyjson.com/auth/login`, obj);
  }
}
