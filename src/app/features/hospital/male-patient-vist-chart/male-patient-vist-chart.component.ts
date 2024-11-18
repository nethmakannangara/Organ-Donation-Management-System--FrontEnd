import { CommonModule, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ApexOptions,NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-male-patient-vist-chart',
  standalone: true,
  imports: [NgApexchartsModule,CommonModule],
  templateUrl: './male-patient-vist-chart.component.html',
  styleUrl: './male-patient-vist-chart.component.css'
})
export class MalePatientVistChartComponent {

  constructor() {}

  public chartOptions: ApexOptions = {
    chart: {
      height: "100px",
      width: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    series: [
      {
        name: "New users",
        data: [650, 418, 645, 626, 235, 56],
        color: "#1A56DB",
      },
      
    ],
    xaxis: {
      categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };
}
