import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseAnimationComponentComponent } from './pulse-animation-component.component';

describe('PulseAnimationComponentComponent', () => {
  let component: PulseAnimationComponentComponent;
  let fixture: ComponentFixture<PulseAnimationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PulseAnimationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulseAnimationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
