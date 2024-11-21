import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule,NgApexchartsModule,AppRoutingModule,FormsModule],
  providers: [],
})
export class AppModule {}
    bootstrapApplication(AppComponent).catch(err => console.error(err));
 
