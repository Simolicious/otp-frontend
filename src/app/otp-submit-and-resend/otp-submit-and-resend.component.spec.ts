import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpSubmitAndResendComponent } from './otp-submit-and-resend.component';

describe('OtpSubmitAndResendComponent', () => {
  let component: OtpSubmitAndResendComponent;
  let fixture: ComponentFixture<OtpSubmitAndResendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpSubmitAndResendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpSubmitAndResendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
