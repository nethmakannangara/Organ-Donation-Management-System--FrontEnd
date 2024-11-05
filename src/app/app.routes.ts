import { RouterModule, Routes } from '@angular/router';
import { DonorLoginComponent } from './pages/donor-login/donor-login.component';
import { OtpRequestFormComponent } from './common/otp-request-form/otp-request-form.component';

export const routes: Routes = [
    {
        path: "donor-Login",
        component: DonorLoginComponent
    },
    {
        path: "otp",
        component: OtpRequestFormComponent
    },
    {
        path: "",
        redirectTo: "/donor-login",
        pathMatch: 'full'
    },
    {
        path: "**",
        redirectTo: "/donor-login"
    }
];
