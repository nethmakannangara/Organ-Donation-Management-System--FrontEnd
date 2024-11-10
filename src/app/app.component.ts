import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { DonorLoginComponent } from "./pages/donor-login/donor-login.component";
import { DonorRegistrationComponent } from "./sub-component/donor-registration/donor-registration.component";
import { DonorDashboardComponent } from "./pages/donor-dashboard/donor-dashboard.component";
import { HospitalDashboardComponent } from './pages/hospital-dashboard/hospital-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageComponent, DonorLoginComponent, DonorRegistrationComponent, DonorDashboardComponent,HospitalDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ODMS-FrontEnd';
}
