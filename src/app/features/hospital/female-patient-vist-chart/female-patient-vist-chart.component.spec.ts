import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemalePatientVistChartComponent } from './female-patient-vist-chart.component';

describe('FemalePatientVistChartComponent', () => {
  let component: FemalePatientVistChartComponent;
  let fixture: ComponentFixture<FemalePatientVistChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FemalePatientVistChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FemalePatientVistChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
