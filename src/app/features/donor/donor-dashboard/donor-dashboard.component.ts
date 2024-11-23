import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-donor-dashboard',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './donor-dashboard.component.html',
  styleUrl: './donor-dashboard.component.css'
})


export class DonorDashboardComponent implements OnInit{
  
  public donorEmail: string | null = null;

  constructor(private route:ActivatedRoute){} 
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.donorEmail = params['email'];
    });
  }

}
