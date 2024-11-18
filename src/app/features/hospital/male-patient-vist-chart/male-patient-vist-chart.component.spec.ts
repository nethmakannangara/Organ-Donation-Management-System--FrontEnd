import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalePatientVistChartComponent } from './male-patient-vist-chart.component';

describe('MalePatientVistChartComponent', () => {
  let component: MalePatientVistChartComponent;
  let fixture: ComponentFixture<MalePatientVistChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MalePatientVistChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MalePatientVistChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
