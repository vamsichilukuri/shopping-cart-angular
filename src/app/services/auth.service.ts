import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const path = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private _signupUrl = 'http://localhost:3000/api/signup';
  private _signupUrl = path + 'signup';

  // private _loginUrl = 'http://localhost:3000/api/login';
  private _loginUrl = path + 'login';

  constructor(private http: HttpClient, private _router: Router) {}

  signupUser(user) {
    return this.http.post<any>(this._signupUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }
  logoutAdmin() {
    this._router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
