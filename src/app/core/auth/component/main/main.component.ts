import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  // public loginInfo: any[] = [{
  //   username: '',
  //   password: ''
  // }]

  otp: string = '';
  isOtpSent: boolean = false;
  isOtpVerified: boolean = false;

  constructor(private authService: AuthServiceService, private router: Router) { }

  login(loginInfo:any) {
    console.log(loginInfo.email);
    console.log(loginInfo.password);
    // this.authService.login(loginInfo).subscribe(
    //   (response) => {
    //     if (response.success) {
    //       // OTP has been sent after successful login
    //       this.isOtpSent = true;
    //     } else {
    //       alert('Invalid login credentials!');
    //     }
    //   },
    //   (error) => {
    //     console.error('Login error:', error);
    //   }
    // );
  }
}
