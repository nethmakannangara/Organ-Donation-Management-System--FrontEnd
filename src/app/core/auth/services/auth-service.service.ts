import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router) {}

   // Login function: sends username and password to the backend
  login(loginInfo: any): Observable<any> {
    console.log(loginInfo)
    return this.http.post<any>(`http://localhost:8080/login`, loginInfo);
  }

  // OTP Verification function for Donor
  verifyOtp(email: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/login/${email}`);
  }

  // Register Donor function
  registerDonor(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register-donor`, user);
  }

  // Save token to local storage (JWT token)
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Get token from local storage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Check if the user is logged in by checking if the token exists
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  // Logout function: remove token from local storage
  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}
