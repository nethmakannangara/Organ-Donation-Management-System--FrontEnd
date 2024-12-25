import { Component } from '@angular/core';
import { PatientVisitByDepartmentChartComponent } from '../patient-visit-by-department-chart/patient-visit-by-department-chart.component';
import { AveragePatientVisitChartComponent } from '../average-patient-visit-chart/average-patient-visit-chart.component';
import { PatientVisitByGenderChartComponent } from '../patient-visit-by-gender-chart/patient-visit-by-gender-chart.component';
import { MalePatientVistChartComponent } from '../male-patient-vist-chart/male-patient-vist-chart.component';
import { FemalePatientVistChartComponent } from '../female-patient-vist-chart/female-patient-vist-chart.component';
import { DoctorListComponent } from '../doctor-list/doctor-list.component';

@Component({
  selector: 'app-hospital-home',
  standalone: true,
  imports: [PatientVisitByDepartmentChartComponent,AveragePatientVisitChartComponent,PatientVisitByGenderChartComponent,MalePatientVistChartComponent,FemalePatientVistChartComponent,DoctorListComponent],
  templateUrl: './hospital-home.component.html',
  styleUrl: './hospital-home.component.css'
})
export class HospitalHomeComponent {

}
