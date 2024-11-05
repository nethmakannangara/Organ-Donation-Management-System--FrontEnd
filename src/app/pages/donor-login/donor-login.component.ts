import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-donor-login',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './donor-login.component.html',
  styleUrl: './donor-login.component.css'
})


export class DonorLoginComponent {

  constructor(private router: Router){}

  onSignIn(){
    this.router.navigate(["/otp"]);
  }
}


