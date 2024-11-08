import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CodeVerificationComponent } from '../code-verification/code-verification.component';

@Component({
  selector: 'app-login-information',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login-information.component.html',
  styleUrl: './login-information.component.css'
})

@Injectable({
  providedIn: 'root'
})
export class LoginInformationComponent {

  constructor(private router: Router, private http: HttpClient) { }

  public loginInfo: any = {
    email: "",
    password: "",
    role: "DONOR"
  }

  donorInfo: any = {
    email: "",
    password: "",
    role: "",
    hello:""
  }

  onSignIn() {
    if (this.loginInfo.email != "" && this.loginInfo.password != "") {

      this.donorInfo = {
        email:this.loginInfo.email,
        password : this.loginInfo.password,
        role : this.loginInfo.role
      }

      this.http.post("http://localhost:8080/donor/login", this.loginInfo).subscribe(data => {
        if (data) {
          console.log("Invalied Email")
        } else {
          this.router.navigate(['donor-Login/verification']), { relativeTo: this.router.routerState.snapshot.root }
          CodeVerificationComponent.loadRegistrationForm(this.donorInfo);
        }
      })
    } else {
      console.log("Okkom fill Krnn");
    }

  }
}
