import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule,NgApexchartsModule],
  providers: [],
})
export class AppModule {}
    bootstrapApplication(AppComponent).catch(err => console.error(err));
 
