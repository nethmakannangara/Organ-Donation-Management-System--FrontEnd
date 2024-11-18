import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { ApexOptions } from 'apexcharts';
import ApexCharts from 'apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-patient-visit-by-department-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './patient-visit-by-department-chart.component.html',
  styleUrl: './patient-visit-by-department-chart.component.css'
})
export class PatientVisitByDepartmentChartComponent implements OnInit, OnDestroy{

  private chart !: ApexCharts;


  constructor() {}

  ngOnInit(): void {
    this.chart = new ApexCharts(document.getElementById('chart')!,this.chartOptions);
    this.chart.render();
  }

  ngOnDestroy(): void {
    if(this.chart){
      this.chart.destroy();
    }
  }

  // ApexCharts options for the donut chart
  public chartOptions: ApexOptions = {
    series: [35.1, 23.5, 2.4, 5.4],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
    chart: {
      height: 320,
      width: "100%",
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Unique visitors",
              fontFamily: "Inter, sans-serif",
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a:number, b:number) => a + b, 0);
                return '$' + sum + 'k';
              },
            },
            value: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: -20,
              formatter: function (value : string) {
                return value + "k";
              },
            },
          },
          size: "80%",
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: {
        formatter: function (value:number) {
          return value + "k";
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value:string) {
          return value + "k";
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };

  // Handle the checkbox change event
  handleCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    
    if(this.chart){
      const currentSeries = (this.chart as any).w.globals.series;
      const updatedSeries :number[] = [...currentSeries];

      if (checkbox.checked) {
        switch (checkbox.value) {
          case 'desktop':
            updatedSeries[0] = 15.1;
            updatedSeries[1] = 22.5;
            updatedSeries[2] = 4.4;
            updatedSeries[3] = 8.4;
            break;
          case 'tablet':
            updatedSeries[0] = 25.1;
            updatedSeries[1] = 26.5;
            updatedSeries[2] = 1.4;
            updatedSeries[3] = 3.4;
            break;
          case 'mobile':
            updatedSeries[0] = 45.1;
            updatedSeries[1] = 27.5;
            updatedSeries[2] = 8.4;
            updatedSeries[3] = 2.4;
            break;
          default:
            updatedSeries[0] = 35.1;
            updatedSeries[1] = 23.5;
            updatedSeries[2] = 2.4;
            updatedSeries[3] = 5.4;
        }
      } else {
        // Reset to default values if checkbox is unchecked
        updatedSeries[0] = 35.1;
        updatedSeries[1] = 23.5;
        updatedSeries[2] = 2.4;
        updatedSeries[3] = 5.4;
      }

      // Update the chart with new series data
      this.chart.updateSeries(updatedSeries);
    }
    
  }

}
