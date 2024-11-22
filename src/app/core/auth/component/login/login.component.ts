import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router, RouterLink } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  toastEmailVisible: boolean = false;
  toastPasswordVisible: boolean = false;

  otp: string = '';
  isOtpSent: boolean = false;
  isOtpVerified: boolean = false;

  constructor(private authService: AuthServiceService, private router: Router) { }

  login() {
    const loginInfo = {
      email: this.email,
      password: this.hashPassword(this.password),
      role: "donor"
    };


    this.authService.login(loginInfo).subscribe(
      (response) => {
        if (response) {
          this.router.navigate(['login/otp-verification'], { queryParams: { email: this.email } });
        } else {
          if (!this.isValidEmail(this.email)) {
            this.showToast('email');
          // } else if (!this.isValidPassword(this.password)) {
          //   this.showToast('password');
          }
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.showToast('email');
      }
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  showToast(type: 'email' | 'password') {
    if (type === 'email') {
      this.toastEmailVisible = true;
      setTimeout(() => (this.toastEmailVisible = false), 10000);
      // } else if (type === 'password') {
      //   this.toastPasswordVisible = true;
      //   setTimeout(() => (this.toastPasswordVisible = false), 10000); 
      // }
    }
  }

  private hashPassword(password: string): string {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64); 
  }
}
