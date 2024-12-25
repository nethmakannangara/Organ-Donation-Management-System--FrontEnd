import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-patient-visit-by-department-chart',
  standalone: true,
  templateUrl: './patient-visit-by-department-chart.component.html',
  styleUrl: './patient-visit-by-department-chart.component.css'
})
export class PatientVisitByDepartmentChartComponent implements OnInit, OnDestroy {
  private chart!: Chart;

  private defaultData = {
    cardiology: [120, 100, 80],
    neurology: [90, 110, 70],
    dermatology: [150, 130, 100]
  };

  private activeData = this.defaultData.cardiology;

  ngOnInit(): void {
    this.createChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private createChart(): void {
    const ctx = document.getElementById('patientVisitChart') as HTMLCanvasElement;

    const config: ChartConfiguration = {
      type: 'doughnut',
      data: {
        labels: ['Cardiology', 'Neurology', 'Dermatology'],
        datasets: [{
          data: this.activeData, 
          backgroundColor: ['#16BDCA', '#FDBA8C', '#E74694'], 
          hoverOffset: 4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Patient Visits Distribution'
          }
        },
      }
    };

    this.chart = new Chart(ctx, config);
  }

  handleCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;

    if (this.chart) {
     
      switch (checkbox.value) {
        case 'cardiology':
          this.activeData = checkbox.checked ? this.defaultData.cardiology : [];
          break;
        case 'neurology':
          this.activeData = checkbox.checked ? this.defaultData.neurology : [];
          break;
        case 'dermatology':
          this.activeData = checkbox.checked ? this.defaultData.dermatology : [];
          break;
      }

      this.chart.data.datasets[0].data = this.activeData;
      this.chart.update();
    }
  }
}