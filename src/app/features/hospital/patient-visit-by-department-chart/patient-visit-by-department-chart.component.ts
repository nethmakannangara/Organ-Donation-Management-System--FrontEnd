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
    cardiology: [35.1, 23.5, 2.4, 5.4],
    neurology: [25.1, 26.5, 1.4, 3.4],
    dermatology: [45.1, 27.5, 8.4, 2.4]
  };

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
        labels: ['Emergency', 'Routine', 'Follow-up', 'Consultation'],
        datasets: [{
          data: this.defaultData.cardiology,
          backgroundColor: [
            '#1C64F2',
            '#16BDCA',
            '#FDBA8C',
            '#E74694'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
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
      let newData: number[];

      if (checkbox.checked) {
        switch (checkbox.value) {
          case 'cardiology':
            newData = this.defaultData.cardiology;
            break;
          case 'neurology':
            newData = this.defaultData.neurology;
            break;
          case 'dermatology':
            newData = this.defaultData.dermatology;
            break;
          default:
            newData = this.defaultData.cardiology;
        }
      } else {
        newData = this.defaultData.cardiology;
      }

      this.chart.data.datasets[0].data = newData;
      this.chart.update();
    }
  }
}