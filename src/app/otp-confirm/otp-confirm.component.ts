import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-otp-confirm',
  templateUrl: './otp-confirm.component.html',
  styleUrls: ['./otp-confirm.component.scss']
})
export class OtpConfirmComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    otp: new FormControl('', [Validators.required]),
  })
  
  constructor(
    private router: Router,
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private shareService: ShareService,
  ) { }

  ngOnInit(): void {
    this.form.get('email')?.patchValue(this.shareService.email$.getValue() || '');
  }

  isValid() {
    this.form.markAllAsTouched();
    return this.form.valid;
  }

  async onConfirm() {
    if(this.isValid()) {
      this.shareService.setEmail(this.form.get('email')?.value!);
      const formValues = this.form.getRawValue();
      const result = await this.dataService.validateOTP(formValues.email!, formValues.otp!).pipe(first()).toPromise();
      this.snackBar.open(result?.message, 'Ok', { duration: 3000 });
    }
  }

  onBack() {
    this.router.navigate(['../']);
  }

}
