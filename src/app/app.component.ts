import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { DonorLoginComponent } from "./pages/donor-login/donor-login.component";
import { DonorRegistrationComponent } from "./sub-component/donor-registration/donor-registration.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageComponent, DonorLoginComponent, DonorRegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ODMS-FrontEnd';
}
