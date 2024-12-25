import { Component } from '@angular/core';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-average-patient-visit-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './average-patient-visit-chart.component.html',
  styleUrl: './average-patient-visit-chart.component.css'
})
export class AveragePatientVisitChartComponent {
  chartOptions: ApexOptions = {
    chart: {
      width: "100%",
      parentHeightOffset: 3,
      type: 'bar',
      height: '320px',
      fontFamily: 'Inter, sans-serif',
      toolbar: {
        show: false
      }
    },
    colors: ["#1A56DB", "#FDBA8C"],
    series: [],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadiusApplication: "end",
        borderRadius: 8
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif"
      }
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"]
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    fill: {
      opacity: 1
    }
  };

  private monthlyData = [
    {
      name: "Male",
      color: "#1A56DB",
      data: [231, 122, 63, 421, 122, 323, 111]
    },
    {
      name: "Female",
      color: "#FDBA8C",
      data: [232, 113, 341, 224, 522, 411, 243]
    }
  ];

  private yearlyData = [
    {
      name: "Male",
      color: "#1A56DB",
      data: [2412, 2111, 2002, 1500, 3200, 2900, 1800]
    },
    {
      name: "Female",
      color: "#FDBA8C",
      data: [2511, 2300, 3003, 2000, 4000, 3500, 2200]
    }
  ];

  constructor() {
    this.updateChartData('monthly');
  }

  handleTimeRangeChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.value === 'monthly' || target.value === 'yearly') {
      this.updateChartData(target.value);
    } else {
      console.error('Invalid value:', target.value);
    }
  }

  private updateChartData(range: 'monthly' | 'yearly'): void {
    const data = range === 'monthly' ? this.monthlyData : this.yearlyData;
    this.chartOptions.series = data;
    this.chartOptions.xaxis = {
      ...this.chartOptions.xaxis,
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    };
  }
}
