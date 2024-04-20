import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-submit-and-resend',
  templateUrl: './otp-submit-and-resend.component.html',
  styleUrls: ['./otp-submit-and-resend.component.scss']
})
export class OtpSubmitAndResendComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['confirm']);
  }
}
