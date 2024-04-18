import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpSubmitAndResendComponent } from './otp-submit-and-resend/otp-submit-and-resend.component';

const routes: Routes = [
  {
    path: '',
    component: OtpSubmitAndResendComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
