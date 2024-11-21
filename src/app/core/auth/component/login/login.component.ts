import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainComponent } from '../main/main.component';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private mainLoginPage: MainComponent, private loginService: AuthServiceService, private router: Router) { }

  public loginInfo: any = {
    email: '',
    password: '',
    role: "donor"
  }

  onSignIn() {
    this.loginService.login(this.loginInfo).subscribe(data => {
      console.log(data);
      if (false) {
        alert("Invalid Email")
      } else {
        this.router.navigate(['/otp-verification'], {
          queryParams: { email: this.loginInfo.email },
          // relativeTo: this.router.routerState.snapshot.root
        });
        // Optionally save login info
        // this.info.setLoginInfo(this.loginInfo);
      }
    },
      error => {
        console.error(error);
        alert("An error occurred. Please try again later.");

      })
  }

}
