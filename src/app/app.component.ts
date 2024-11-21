import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HospitalDashboardComponent } from "./features/hospital/hospital-dashboard/hospital-dashboard.component";
import { DonorDashboardComponent } from "./features/donor/donor-dashboard/donor-dashboard.component";
import express from 'express';
import cors from 'cors';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HospitalDashboardComponent, DonorDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  title = 'ODMS-FrontEnd';

  // app = express();
  // port = 8080;

  ngOnInit(): void {
    // this.app.use(cors());

    // this.app.get('/announcement', (req, res) => {
    //   res.json({message: "This is the announcement data"});
    // });

    // this.app.listen(this.port, () => {
    //   console.log(`Server is running on port ${this.port}`);
    // })
;
    initFlowbite();
  }
}
