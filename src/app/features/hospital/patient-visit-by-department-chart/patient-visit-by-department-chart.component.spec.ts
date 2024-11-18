import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVisitByDepartmentChartComponent } from './patient-visit-by-department-chart.component';

describe('PatientVisitByDepartmentChartComponent', () => {
  let component: PatientVisitByDepartmentChartComponent;
  let fixture: ComponentFixture<PatientVisitByDepartmentChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientVisitByDepartmentChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientVisitByDepartmentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
