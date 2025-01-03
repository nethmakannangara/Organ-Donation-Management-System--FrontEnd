import { RouterModule, Routes } from '@angular/router';
import { DonorDashboardComponent } from './features/donor/donor-dashboard/donor-dashboard.component';
import { NoticesComponent } from './features/donor/notices/notices.component';
import { NoticeBoxComponent } from './features/donor/notice-box/notice-box.component';
import { HospitalDashboardComponent } from './features/hospital/hospital-dashboard/hospital-dashboard.component';
import { OrganDonationRequestComponent } from './features/donor/organ-donation-request/organ-donation-request.component';
import { NgModule } from '@angular/core';
import { MainComponent } from './core/auth/component/main/main.component';
import { LoginComponent } from './core/auth/component/login/login.component';
import { OtpVerificaionComponent } from './core/auth/component/otp-verificaion/otp-verificaion.component';
import { RegistrationFormComponent } from './features/donor/registration-form/registration-form.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { AddAnnouncementComponent } from './features/hospital/add-announcement/add-announcement.component';
import { HospitalHomeComponent } from './features/hospital/hospital-home/hospital-home.component';
import { HospitalLoginComponent } from './core/auth/component/hospital-login/hospital-login.component';
import { SignUpComponent } from './core/auth/component/sign-up/sign-up.component';

export const routes: Routes = [
    {
        path:'donor-dashboard',
        component:DonorDashboardComponent,
        children:[{
            path:'',
            component:NoticesComponent,    
        },
        {
            path:'request-form',
            component:OrganDonationRequestComponent
        }
    ]
    },
    {
        path:'hospital-dashboard',
        component:HospitalDashboardComponent,
        children:[
            {
                path:'',
                component: HospitalHomeComponent
            },
            {
                path:'add-announcement',
                component: AddAnnouncementComponent
            }
        ]
    },
    {
        path:'login',
        component:MainComponent,
        children:[
            {
                path:'donor-login',
                component:LoginComponent
            },
            {
                path:'donor-signUp',
                component:SignUpComponent
            },
            {
                path:'hospital',
                component:HospitalLoginComponent
            },
            {
                path:'otp-verification',
                component:OtpVerificaionComponent
            }
        ]
    },
    {
        path:'hospital-login',
        component:HospitalLoginComponent
    },
    {
        path:'donor-registration-form',
        component:RegistrationFormComponent
    },
    {
        path:'',
        component:HomePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}