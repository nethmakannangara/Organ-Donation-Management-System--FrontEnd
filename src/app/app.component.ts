import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HospitalDashboardComponent } from "./features/hospital/hospital-dashboard/hospital-dashboard.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HospitalDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'ODMS-FrontEnd';

  ngOnInit(): void {
    initFlowbite();
  }
}
