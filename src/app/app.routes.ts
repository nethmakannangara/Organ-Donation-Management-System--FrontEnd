import { RouterModule, Routes } from '@angular/router';
import { DonorLoginComponent } from './pages/donor-login/donor-login.component';

export const routes: Routes = [
    {
        path: "donor-Login",
        component: DonorLoginComponent
    },
    {
        path: "donor-Login",
        redirectTo: "otp",
        pathMatch: 'full'
    }
];
