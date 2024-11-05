import { Routes } from '@angular/router';
import { OtpRequestFormComponent } from '../../common/otp-request-form/otp-request-form.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: "otp",
        component: OtpRequestFormComponent
    }
];

