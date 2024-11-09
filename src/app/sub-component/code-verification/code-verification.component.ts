import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-code-verification',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './code-verification.component.html',
  styleUrl: './code-verification.component.css'
})

export class CodeVerificationComponent {
 
  constructor(private router: Router, private http: HttpClient, private loginService: LoginService) {
    this.loadRegistrationForm();
    this.generateCode = "1234211";
  }

  generateCode:String;

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

  public loadRegistrationForm(){
    if (true) {
      this.http.get(`http://localhost:8080/send-verification?email=${this.loginService.getLoginInfo().email}`).subscribe((data: any) => {
        console.log(data);
        this.generateCode = data;
      })
    }
  }

  public checkVerificationCode() {
    let code = "";
    for (let index = 0; index < this.otp.length; index++) {
      code += this.otp[index];
    }
    console.log(this.generateCode == code);
    if(this.generateCode == code){
      this.router.navigate(['registration']), { relativeTo: this.router.routerState.snapshot.root }
    }
  }
}


