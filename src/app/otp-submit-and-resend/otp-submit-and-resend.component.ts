import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs';

@Component({
  selector: 'app-otp-submit-and-resend',
  templateUrl: './otp-submit-and-resend.component.html',
  styleUrls: ['./otp-submit-and-resend.component.scss']
})
export class OtpSubmitAndResendComponent implements OnInit {

  emailForm = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    private dataService: DataService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  isValid() {
    this.emailForm.markAllAsTouched();
    return this.emailForm.valid;
  }

  async onSubmit() {
    if(this.isValid()){
      const result = await this.dataService.generateOTP(this.emailForm.value!).pipe(first()).toPromise();
      this.snackBar.open(result?.message, 'Ok', { duration: 3000 });
    }
  }

  async onResend() {
    if(this.isValid()) {
      const result = await this.dataService.resendOTP(this.emailForm.value!).pipe(first()).toPromise();
      this.snackBar.open(result?.message, 'Ok', { duration: 3000 });
    }
  }

  onConfirm() {
    this.router.navigate(['confirm']);
  }
}
