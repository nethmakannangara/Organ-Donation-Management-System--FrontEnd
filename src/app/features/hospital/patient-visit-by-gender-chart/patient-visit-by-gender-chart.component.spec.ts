import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVisitByGenderChartComponent } from './patient-visit-by-gender-chart.component';

describe('PatientVisitByGenderChartComponent', () => {
  let component: PatientVisitByGenderChartComponent;
  let fixture: ComponentFixture<PatientVisitByGenderChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientVisitByGenderChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientVisitByGenderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
