import { Routes } from '@angular/router';
import { DonorDashboardComponent } from './features/donor/donor-dashboard/donor-dashboard.component';
import { NoticesComponent } from './features/donor/notices/notices.component';
import { NoticeBoxComponent } from './features/donor/notice-box/notice-box.component';
import { HospitalDashboardComponent } from './features/hospital/hospital-dashboard/hospital-dashboard.component';

export const routes: Routes = [
    {
        path:'',
        component:DonorDashboardComponent,
        children:[{
            path:'notices',
            component:NoticesComponent,
    
        }]
    },
    {
        path:'hospital-dashboard',
        component:HospitalDashboardComponent
    }
];
