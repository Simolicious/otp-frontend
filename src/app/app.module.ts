import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtpSubmitAndResendComponent } from './otp-submit-and-resend/otp-submit-and-resend.component';
import { OtpConfirmComponent } from './otp-confirm/otp-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    OtpSubmitAndResendComponent,
    OtpConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
