import { RouterModule, Routes } from '@angular/router';
import { DonorLoginComponent } from './pages/donor-login/donor-login.component';
import { LoginInformationComponent } from './sub-component/login-information/login-information.component';
import { CodeVerificationComponent } from './sub-component/code-verification/code-verification.component';
import { DonorRegistrationComponent } from './sub-component/donor-registration/donor-registration.component';
import { DonorDashboardComponent } from './pages/donor-dashboard/donor-dashboard.component';
import { AnnouncementsComponent } from './sub-component/announcements/announcements.component';

export const routes: Routes = [
    {
        path: "donor-Login",
        component: DonorLoginComponent,
        children: [
            {
                path: '',  // Default child route when visiting /donor-Login
                redirectTo: 'login',  // Redirect to the 'login' child route
                pathMatch: 'full'  // Ensure full path match for redirect
            },
            {
                path: "login",
                component: LoginInformationComponent,
 
            },
            {
                path:"verification",
                component:CodeVerificationComponent
            }
        ]
    },
    {
        path: "registration",
        component: DonorRegistrationComponent
    },
    {
        path:"dashboard",
        component:DonorDashboardComponent,
        children:[
            {
                path:'announcements',
                component:AnnouncementsComponent
            }
        ]
    }
];
