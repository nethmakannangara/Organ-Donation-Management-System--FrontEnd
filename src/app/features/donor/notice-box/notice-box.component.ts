import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AuthServiceService } from '../../../core/auth/services/auth-service.service';

@Component({
  selector: 'app-notice-box',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './notice-box.component.html',
  styleUrl: './notice-box.component.css'
})
export class NoticeBoxComponent implements OnInit{

  @Input()
  public notice: any;
  @Input()
  public email: any;

  // Corrected constructor syntax
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
    console.log(this.email);  
  }

}
