import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragePatientVisitChartComponent } from './average-patient-visit-chart.component';

describe('AveragePatientVisitChartComponent', () => {
  let component: AveragePatientVisitChartComponent;
  let fixture: ComponentFixture<AveragePatientVisitChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AveragePatientVisitChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AveragePatientVisitChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
