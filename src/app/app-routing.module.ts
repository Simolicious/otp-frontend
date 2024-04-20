import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpSubmitAndResendComponent } from './otp-submit-and-resend/otp-submit-and-resend.component';
import { OtpConfirmComponent } from './otp-confirm/otp-confirm.component';

const routes: Routes = [
  {
    path: '',
    component: OtpSubmitAndResendComponent,
  },
  {
    path: 'confirm',
    component: OtpConfirmComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
