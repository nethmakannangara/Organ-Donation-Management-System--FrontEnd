import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganDonationRequestComponent } from './organ-donation-request.component';

describe('OrganDonationRequestComponent', () => {
  let component: OrganDonationRequestComponent;
  let fixture: ComponentFixture<OrganDonationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganDonationRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganDonationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
