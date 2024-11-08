import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginInformationComponent } from '../login-information/login-information.component';

@Component({
  selector: 'app-code-verification',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './code-verification.component.html',
  styleUrl: './code-verification.component.css'
})

// @Injectable({
//   providedIn: 'root'
// })

export class CodeVerificationComponent {
  static http: any;

  constructor(private router: Router, private http: HttpClient, private loginInfo: LoginInformationComponent) {
  }

  otp: String[] = ['', '', '', ''];

  onVerify() {
    this.router.navigate(['registration']), { relativeTo: this.router.routerState.snapshot.root }
  }

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

  public static loadRegistrationForm(loginInfo: any) {
    if (loginInfo != "") {
      this.http.get(`http://localhost:8080/send-verification?email=${loginInfo.email}`).subscribe((data: any) => {
          console.log(data);
      })
    }
  }


}
