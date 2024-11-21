import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-otp-verificaion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './otp-verificaion.component.html',
  styleUrl: './otp-verificaion.component.css'
})
export class OtpVerificaionComponent {

  generateCode: String | null = null;
  email:string = "";
  otp: String[] = ['', '', '', ''];

  constructor(private router: Router, private http: HttpClient, private authService: AuthServiceService,private route:ActivatedRoute) {
    this.loadRegistrationForm();

    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      console.log('Notice ID:', this.email);

      if (this.email) {
        console.log(this.verifyOtp())
      }
    });
  }



  // onVerify() {
  //   this.router.navigate(['registration']), { relativeTo: this.router.routerState.snapshot.root }
  // }

  onInputChange(event: any, index: number) {
    const value = event.target.value;
    if (value.match(/[0-9]/)) {
      if (index < this.otp.length) {
        document.getElementById(`textfiled-${index + 1}`)?.focus();
      }
    }
    if (index > 0) {
      document.getElementById(`textfiled-${index - 1}`)?.focus();
    }
  }

  public loadRegistrationForm() {
    // if (true) {
    //   this.http.get(`http://localhost:8080/send-verification?email=${this.loginService.getLoginInfo().email}`).subscribe((data: any) => {
    //     console.log(data);
    //     this.generateCode = data;
    //   })
    // }
  }

  verifyOtp() {
    this.authService.verifyOtp(this.email).subscribe(
      (response) => {
        this.generateCode = response;
        console.log(this.generateCode)
        if (response.success) {
          this.authService.setToken(response.token); // Save the token
          // this.isOtpVerified = true;
          this.router.navigate(['/donor-dashboard']); // Redirect to donor dashboard
        } else {
          alert('Invalid OTP!');
        }
      },
      (error) => {
        console.error('OTP verification error:', error);
      }
    );
  }

  public checkVerificationCode() {
    let code = "";
    for (let index = 0; index < this.otp.length; index++) {
      code += this.otp[index];
    }
    console.log(this.generateCode == code);
    if (this.generateCode == code) {
      this.router.navigate(['donor-registration-form']), { relativeTo: this.router.routerState.snapshot.root }
    }
  }

}
