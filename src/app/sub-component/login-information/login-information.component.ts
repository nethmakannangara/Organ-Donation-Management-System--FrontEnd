import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CodeVerificationComponent } from '../code-verification/code-verification.component';
import { LoginService } from '../../login.service';

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

  constructor(private router: Router, private http: HttpClient,private info:LoginService) {}

  public loginInfo: any = {
    email: "",
    password: "",
    role: "DONOR"
  }

  onSignIn() {
    if (this.loginInfo.email != "" && this.loginInfo.password != "") {
      this.http.post("http://localhost:8080/donors/login", this.loginInfo).subscribe(data => {
        if (data) {
          console.log("Invalied Email")
        } else {
          this.router.navigate(['donor-Login/verification']), { relativeTo: this.router.routerState.snapshot.root }
          this.info.setLoginInfo(this.loginInfo);
        }
      })
    } else {
      console.log("Okkom fill Krnn");
    }

  }
}
