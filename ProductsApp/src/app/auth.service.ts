import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  private _registerUrl = "http://localhost:3001/register";
  private _loginUrl = "http://localhost:3001/login";
  
  constructor(private http: HttpClient,
              private _router: Router) { }

  isAdm = localStorage.getItem('adminnav')
  isUsr = localStorage.getItem('usernav')


  

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  loggedInAdmin() {
    return !!localStorage.getItem('admin')    
  }

  logoutAdmin() {
    localStorage.removeItem('admin')
    this._router.navigate(['/adminlogin'])
  }
}