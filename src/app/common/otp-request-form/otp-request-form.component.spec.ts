import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpRequestFormComponent } from './otp-request-form.component';

describe('OtpRequestFormComponent', () => {
  let component: OtpRequestFormComponent;
  let fixture: ComponentFixture<OtpRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpRequestFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
