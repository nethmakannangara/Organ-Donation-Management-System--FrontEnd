import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { OtpVerificaionComponent } from "../otp-verificaion/otp-verificaion.component"; 

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, NgIf, FormsModule, CommonModule, OtpVerificaionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
