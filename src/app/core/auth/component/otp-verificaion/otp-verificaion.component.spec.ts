import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVerificaionComponent } from './otp-verificaion.component';

describe('OtpVerificaionComponent', () => {
  let component: OtpVerificaionComponent;
  let fixture: ComponentFixture<OtpVerificaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpVerificaionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpVerificaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
