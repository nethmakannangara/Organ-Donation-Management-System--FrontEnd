import { Component, OnInit } from '@angular/core';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-patient-visit-by-gender-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './patient-visit-by-gender-chart.component.html',
  styleUrl: './patient-visit-by-gender-chart.component.css'
})
export class PatientVisitByGenderChartComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public chartOptions: ApexOptions = {
    chart: {
      width:"100%",
      height:"250px",
      type: "line",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
      curve: 'smooth',
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26,
      },
    },
    series: [
      {
        name: "Male",
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: "#1A56DB",
      },
      {
        name: "Female",
        data: [6456, 6356, 6526, 6332, 6418, 6500],
        color: "#7E3AF2",
      },
    ],
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        }
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

  // scrollContainer: HTMLDivElement | null = document.getElementById('patient-visit-by-gender-chart') as HTMLDivElement| null;

  // if (scrollContainer) {
  //   scrollContainer.addEventListener('wheel', (e) => {
  //     if (e.deltaY) {
  //       e.preventDefault();
  //       scrollContainer.scrollTop += e.deltaY;
  //     }
  //   });
  // }
}

